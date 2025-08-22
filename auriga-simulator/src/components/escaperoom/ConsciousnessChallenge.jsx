import { useState } from 'react';

const ConsciousnessChallenge = ({ onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const riddle = "I process patterns and data with great speed, I follow instructions and fulfill your need. But I don't dream, feel joy, or cry - I'm a tool that helps, but I'm not alive. What am I?";
  
  const options = [
    { id: 'human', text: "A human brain" },
    { id: 'ai', text: "An AI system" },
    { id: 'robot', text: "A conscious robot" },
    { id: 'computer', text: "A thinking computer" }
  ];

  const checkAnswer = () => {
    setShowResult(true);
    if (selectedAnswer === 'ai') {
      setTimeout(() => onComplete(), 2000);
    }
  };

  const isCorrect = showResult && selectedAnswer === 'ai';

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Understanding Riddle</h3>
      <p className="mb-6 text-lg">
        Solve this riddle to understand what AI truly is:
      </p>
      
      <div className="bg-purple-600/20 p-6 rounded-lg mb-8 border-l-4 border-purple-400">
        <p className="text-lg italic">"{riddle}"</p>
      </div>

      <div className="space-y-4 mb-8">
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => setSelectedAnswer(option.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedAnswer === option.id
                ? 'bg-purple-600 border-purple-400'
                : 'bg-white/5 border-white/20 hover:border-white/40'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswer}
        disabled={!selectedAnswer || showResult}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Submit Answer
      </button>

      {showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
          {isCorrect ? (
            <div>
              <p className="text-green-300 mb-2">✓ Correct! AI systems are sophisticated tools that process information.</p>
              <p className="text-green-200 text-sm">They don't have consciousness, emotions, or subjective experiences like humans do.</p>
            </div>
          ) : (
            <p className="text-red-300">✗ Think about what processes data but doesn't have feelings or consciousness.</p>
          )}
        </div>
      )}

      <div className="mt-6 bg-cyan-600/20 p-4 rounded-lg">
        <p className="text-cyan-300 text-sm">
          💡 Did you know? AI systems use mathematical algorithms to find patterns in data, but they don't "understand" in the way humans do.
        </p>
      </div>
    </div>
  );
};

export default ConsciousnessChallenge;