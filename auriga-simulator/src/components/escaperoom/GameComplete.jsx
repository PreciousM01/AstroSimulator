import { useState, useEffect } from 'react';

const GameComplete = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setShowCelebration(true);
  }, []);

  const keyLearnings = [
    "AI excels at data processing but lacks consciousness",
    "Clear, specific prompts lead to better AI responses",
    "Personal and sensitive data should remain private",
    "AI systems are sophisticated tools, not thinking beings",
    "Responsible AI use requires transparency and human oversight"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center p-4">
      <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-4xl text-center text-white transition-all duration-1000 ${
        showCelebration ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">🎉 Mission Accomplished! 🎉</h1>
          <p className="text-2xl text-green-300">
            You've successfully restored the AI system!
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">What You've Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyLearnings.map((learning, index) => (
              <div 
                key={index}
                className="bg-blue-600/20 p-4 rounded-lg border border-blue-400/30"
              >
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <p className="text-left">{learning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">🤖 AI Assistant Message</h3>
          <p className="text-lg italic">
            "Thank you for helping me understand my role better! Remember, I'm here to assist and enhance human capabilities, 
            not replace human judgment. Together, we can use AI responsibly to solve problems and create amazing things!"
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg">
            You're now equipped with essential AI literacy skills!
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
          >
            Return to Home
          </button>
        </div>

        <div className="mt-8 text-sm text-white/70">
          <p>Share your AI knowledge with others and continue learning about responsible AI use!</p>
        </div>
      </div>
    </div>
  );
};

export default GameComplete;