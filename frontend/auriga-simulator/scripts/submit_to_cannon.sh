#!/usr/bin/env bash
set -euo pipefail
# submit_to_cannon.sh
# Usage:
#   ./scripts/submit_to_cannon.sh user@cannon.crug /remote/data/path /remote/workdir /local/path/run_sim_sbatch.sh [scheduler]
# scheduler: optional, use 'slurm' to submit via sbatch; otherwise runs in background.

if [ "$#" -lt 4 ]; then
  echo "Usage: $0 <user@host> <remote_data_dir> <remote_work_dir> <local_job_script> [scheduler]"
  exit 2
fi

REMOTE="$1"
DATA_DIR="$2"
WORK_DIR="$3"
LOCAL_JOB_SCRIPT="$4"
SCHEDULER="${5:-}" 

echo "Preparing to run on ${REMOTE}"

echo "Copying job script to ${REMOTE}:${WORK_DIR}/scripts/"
ssh "$REMOTE" "mkdir -p '${WORK_DIR%/}/scripts' '${WORK_DIR%/}/input' '${WORK_DIR%/}/results'"
scp "$LOCAL_JOB_SCRIPT" "${REMOTE}:${WORK_DIR%/}/scripts/"

echo "Staging data on remote host (rsync executed on remote side)"
ssh "$REMOTE" bash -s <<'SSHRC'
set -euo pipefail
DATA_DIR=""
WORK_DIR=""
echo "Note: data staging assumes data is accessible on the same host (adjust if different)."
exit 0
SSHRC

# If data is already on the remote host under DATA_DIR, copy locally using rsync (remote-local)
echo "Running rsync on remote host to stage data into workdir/input"
ssh "$REMOTE" "rsync -av --progress --exclude='*.tmp' '${DATA_DIR%/}/' '${WORK_DIR%/}/input/'"

REMOTE_JOB_SCRIPT="${WORK_DIR%/}/scripts/$(basename "$LOCAL_JOB_SCRIPT")"
if [ "$SCHEDULER" = "slurm" ]; then
  echo "Submitting job with sbatch on ${REMOTE}"
  ssh "$REMOTE" "cd '${WORK_DIR%/}' && sbatch '${REMOTE_JOB_SCRIPT}'"
else
  echo "Running job script in background on ${REMOTE}"
  ssh "$REMOTE" "nohup bash '${REMOTE_JOB_SCRIPT}' > '${WORK_DIR%/}/run.out' 2>&1 &"
fi

echo "submit_to_cannon: done."
