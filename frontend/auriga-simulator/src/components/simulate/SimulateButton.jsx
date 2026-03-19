import { useState, useEffect, useRef } from "react";

export default function SimulateButton({ galaxy, viewMode, subhalo, timeType, startTime, endTime }) {
  const [status, setStatus] = useState("idle"); // idle | running | done | failed
  const [jobId, setJobId] = useState(null);
  const [logs, setLogs] = useState("");
  const pollRef = useRef(null);

  const startSimulation = async () => {
    setStatus("running");
    setLogs("");

    try {
      const res = await fetch("http://localhost:8000/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ galaxy_id: galaxy?.id, view_mode: viewMode, subhalo_id: subhalo?.id ?? null, time_type: timeType, start_time: parseFloat(startTime), end_time: parseFloat(endTime) }),
      });
      const data = await res.json();
      setJobId(data.job_id);
    } catch {
      setStatus("failed");
    }
  };

  useEffect(() => {
    if (!jobId || status === "done" || status === "failed") return;

    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/status/${jobId}`);
        const data = await res.json();
        setLogs(data.logs);
        if (data.status === "done" || data.status === "failed") {
          setStatus(data.status);
          clearInterval(pollRef.current);
        }
      } catch {
        setStatus("failed");
        clearInterval(pollRef.current);
      }
    }, 3000);

    return () => clearInterval(pollRef.current);
  }, [jobId, status]);

  const labels = {
    idle: "🚀 Generate Visualization",
    running: "⏳ Running...",
    done: "✅ Done!",
    failed: "❌ Failed — Try Again",
  };

  return (
    <div className="flex flex-col items-end gap-4">
      {logs && (
        <pre className="w-full bg-black/70 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-green-400/90 font-mono text-xs leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
          {logs}
        </pre>
      )}

      <button
        onClick={status === "idle" || status === "failed" ? startSimulation : undefined}
        disabled={status === "running"}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {labels[status]}
      </button>
    </div>
  );
}