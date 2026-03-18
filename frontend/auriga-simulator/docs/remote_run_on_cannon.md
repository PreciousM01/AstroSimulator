# Running the simulator on cannon.crug

Overview
- Preferred: run the simulator on `cannon.crug` to avoid moving large datasets.
- This repository includes a helper script and a Slurm job template to stage data and run remotely.

Files added
- `scripts/submit_to_cannon.sh` — local wrapper that copies a job script, stages data (via `rsync` on the remote host), and either submits via Slurm or runs in background.
- `scripts/run_sim_sbatch.sh` — job template to edit for your environment (`WORK_DIR`, modules, run command).

Quick start
1. Ensure you have SSH access to `cannon.crug` and that `rsync` is available there.
2. Edit `scripts/run_sim_sbatch.sh` and set `WORK_DIR`, the simulation command, and any modules/venv activation.
3. From your machine, run:
```
chmod +x scripts/submit_to_cannon.sh
./scripts/submit_to_cannon.sh user@cannon.crug /path/to/data /path/to/workdir scripts/run_sim_sbatch.sh slurm
```
Replace `user@cannon.crug`, `/path/to/data`, and `/path/to/workdir` with real values. Use `slurm` as the last arg to submit with `sbatch`, or omit it to run the job script in background.

Notes & troubleshooting
- If `rsync` on `cannon.crug` cannot access the DATA_DIR directly (data on a different host), you can modify the script to pull from that host or run an institutional staging step.
- For reproducibility, build a container (Singularity recommended on HPC) and run it inside the job script.
- If you want collaboration/sharing, have the job write compressed derived products to a shared location and notify collaborators.

If you'd like, I can:
- Update the job script to use Singularity/Docker with a provided container path.
- Add a chunked/staged-run workflow that processes data in batches to limit remote disk usage.
