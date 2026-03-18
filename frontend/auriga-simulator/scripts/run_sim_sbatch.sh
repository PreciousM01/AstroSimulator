#!/bin/bash
# example Slurm job script for running the simulator on `cannon.crug`
# Edit the variables below as needed.
# Usage: put this file on the remote work dir and submit with `sbatch run_sim_sbatch.sh`

#SBATCH --job-name=auriga-sim
#SBATCH --output=auriga-sim-%j.out
#SBATCH --error=auriga-sim-%j.err
#SBATCH --time=24:00:00
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=64G
#SBATCH --partition=compute

WORK_DIR="/path/to/workdir"   # set to your work dir
INPUT_DIR="${WORK_DIR}/input"
RESULTS_DIR="${WORK_DIR}/results"

module purge
# load modules or activate environment here
# module load python/3.10
# source /path/to/venv/bin/activate

mkdir -p "$RESULTS_DIR"
cd "$WORK_DIR"

echo "Starting simulation on $(hostname)"
# Run your simulation command here. Example:
# python simulate.py --input "$INPUT_DIR" --out "$RESULTS_DIR"

echo "Simulation finished"
