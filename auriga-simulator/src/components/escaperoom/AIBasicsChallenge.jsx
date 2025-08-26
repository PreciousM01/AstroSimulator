import { useState, useEffect } from 'react';

export default function AIBasicsChallenge({ onComplete }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(true);

  const tasks = [
    { id: 1, text: "Recognize faces in photos", correct: true, icon: "📸", visual: "🤖👁️" },
    { id: 2, text: "Feel emotions like humans", correct: false, icon: "😢", visual: "❌💭" },
    { id: 3, text: "Translate languages", correct: true, icon: "🌍", visual: "🤖🗣️" },
    { id: 4, text: "Have consciousness", correct: false, icon: "🧠", visual: "❌🤔" },
    { id: 5, text: "Analyze data patterns", correct: true, icon: "📊", visual: "🤖📈" },
    { id: 6, text: "Experience physical pain", correct: false, icon: "⚡", visual: "❌😰" }
  ];

  const correctAnswers = tasks.filter(task => task.correct).map(task => task.id);

  useEffect(() => {
    const timer = setTimeout(() => setAiSpeaking(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAnswer = (taskId) => {
    setSelectedAnswers(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const checkAnswers = () => {
    const isCorrect = correctAnswers.length === selectedAnswers.length &&
      correctAnswers.every(id => selectedAnswers.includes(id));
    
    setShowResult(true);
    if (isCorrect) {
      setTimeout(() => onComplete(), 2000);
    }
  };

  const isCorrect = showResult && correctAnswers.length === selectedAnswers.length &&
    correctAnswers.every(id => selectedAnswers.includes(id));

  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-xl p-8 text-white border border-cyan-400/30">
      <div className="flex items-center mb-6">
        <div className={`text-4xl mr-4 transition-all duration-1000 ${aiSpeaking ? 'animate-pulse' : ''}`}>
          🤖
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-300">AI System Calibration</h3>
          <p className={`text-sm transition-opacity duration-1000 ${aiSpeaking ? 'opacity-100' : 'opacity-60'}`}>
            {aiSpeaking ? "🔊 Analyzing system capabilities..." : "Ready for assessment"}
          </p>
        </div>
      </div>
      
      <p className="mb-6 text-lg bg-cyan-900/30 p-4 rounded-lg border-l-4 border-cyan-400">
        💡 <strong>Mission:</strong> Help me understand what I can and cannot do. Select my actual capabilities:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => toggleAnswer(task.id)}
            className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
              selectedAnswers.includes(task.id)
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-cyan-400 shadow-lg shadow-cyan-400/20'
                : 'bg-white/5 border-white/20 hover:border-cyan-400/50 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{task.icon}</span>
                <span className="font-medium">{task.text}</span>
              </div>
              <span className="text-xl">{task.visual}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswers}
        disabled={selectedAnswers.length === 0 || showResult}
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
      >
        🔍 Run Diagnostic
      </button>

      {showResult && (
        <div className={`mt-6 p-6 rounded-lg border-l-4 ${
          isCorrect 
            ? 'bg-green-900/30 border-green-400 text-green-300' 
            : 'bg-red-900/30 border-red-400 text-red-300'
        }`}>
          {isCorrect ? (
            <div>
              <p className="text-lg font-bold mb-2">✅ System Calibrated Successfully!</p>
              <p className="text-green-200">Perfect! I excel at data processing and pattern recognition, but I don't have consciousness or emotions like humans.</p>
              <div className="mt-4 p-3 bg-green-800/20 rounded text-sm">
                💡 <strong>Did You Know?</strong> AI systems process billions of data points but experience the world very differently than humans do.
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg font-bold mb-2">❌ Calibration Error</p>
              <p className="text-red-200">Let me help: I'm great with data and patterns, but I don't think or feel like humans do.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};