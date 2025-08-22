import { useState } from 'react';

const AIBasicsChallenge = ({ onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const tasks = [
    { id: 1, text: "Recognize faces in photos", correct: true },
    { id: 2, text: "Feel emotions like humans", correct: false },
    { id: 3, text: "Translate languages", correct: true },
    { id: 4, text: "Have consciousness", correct: false },
    { id: 5, text: "Analyze data patterns", correct: true },
    { id: 6, text: "Experience physical pain", correct: false }
  ];

  const correctAnswers = tasks.filter(task => task.correct).map(task => task.id);

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
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">AI Capabilities Assessment</h3>
      <p className="mb-6 text-lg">
        The AI system needs calibration. Select which tasks AI can actually perform:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => toggleAnswer(task.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedAnswers.includes(task.id)
                ? 'bg-blue-600 border-blue-400'
                : 'bg-white/5 border-white/20 hover:border-white/40'
            }`}
          >
            {task.text}
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswers}
        disabled={selectedAnswers.length === 0 || showResult}
        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Submit Assessment
      </button>

      {showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
          {isCorrect ? (
            <p className="text-green-300">✓ Correct! AI excels at data processing and pattern recognition, but doesn't have consciousness or emotions.</p>
          ) : (
            <p className="text-red-300">✗ Try again. Remember: AI processes data but doesn't have human-like consciousness or feelings.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AIBasicsChallenge;