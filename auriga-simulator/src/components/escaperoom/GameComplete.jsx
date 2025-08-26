import { useState, useEffect } from 'react';

export default function GameComplete() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const keyLearnings = [
    {
      title: "AI Capabilities vs Limitations",
      description: "AI excels at data processing and pattern recognition, but lacks consciousness and emotions",
      icon: "🤖"
    },
    {
      title: "Clear Communication",
      description: "Specific, detailed prompts lead to significantly better AI responses",
      icon: "💬"
    },
    {
      title: "Data Privacy Awareness",
      description: "Personal identifiers, financial, and medical data should always remain private",
      icon: "🔒"
    },
    {
      title: "Pattern Recognition Reality",
      description: "AI systems are sophisticated pattern-matching machines, not conscious entities",
      icon: "🧩"
    },
    {
      title: "Ethical AI Usage",
      description: "Responsible AI use requires transparency, consent, and human oversight",
      icon: "⚖️"
    }
  ];

  const didYouKnowFacts = [
    "AI systems can process millions of data points per second but don't 'understand' them like humans do",
    "Clear prompts can improve AI response quality by up to 80%",
    "The global AI ethics market is expected to reach $15 billion by 2030",
    "AI bias often reflects biases present in training data, highlighting the importance of diverse datasets"
  ];

  useEffect(() => {
    setShowCelebration(true);
    const factTimer = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % didYouKnowFacts.length);
    }, 4000);
    return () => clearInterval(factTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🎉</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000">🚀</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-500">🎯</div>
      </div>

      <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-6xl text-center text-white transition-all duration-1000 relative z-10 ${
        showCelebration ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-bounce">🏆</div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mission Accomplished!
          </h1>
          <p className="text-2xl text-green-300 animate-pulse">
            🎊 AI System Successfully Restored! 🎊
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-600/20 p-6 rounded-lg border border-green-400/30">
            <div className="text-4xl mb-2">5</div>
            <div className="text-green-300 font-semibold">Challenges Completed</div>
          </div>
          <div className="bg-blue-600/20 p-6 rounded-lg border border-blue-400/30">
            <div className="text-4xl mb-2">100%</div>
            <div className="text-blue-300 font-semibold">AI Literacy Achieved</div>
          </div>
          <div className="bg-purple-600/20 p-6 rounded-lg border border-purple-400/30">
            <div className="text-4xl mb-2">🧠</div>
            <div className="text-purple-300 font-semibold">Expert Level Unlocked</div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300">🎓 Your AI Knowledge Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyLearnings.map((learning, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-400/30 transform hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">{learning.icon}</div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{learning.title}</h3>
                <p className="text-sm text-gray-200">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Assistant Final Message */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8 mb-8 border border-purple-400/30">
          <div className="flex items-center justify-center mb-4">
            <div className="text-5xl mr-4 animate-pulse">🤖</div>
            <h3 className="text-2xl font-bold text-purple-300">Final Transmission</h3>
          </div>
          <p className="text-lg italic text-purple-100 leading-relaxed">
            "Thank you for helping me understand my role better! You've learned that I'm here to assist and enhance human capabilities, 
            not replace human judgment. Together, we can use AI responsibly to solve problems and create amazing things. 
            Remember: I'm a powerful tool, but the wisdom to use me well comes from humans like you!"
          </p>
        </div>

        {/* Rotating Did You Know Facts */}
        <div className="bg-yellow-600/20 rounded-lg p-6 mb-8 border border-yellow-400/30">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">💡 Did You Know?</h3>
          <p className="text-yellow-100 transition-all duration-500">
            {didYouKnowFacts[currentFact]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <p className="text-xl text-cyan-300 font-semibold">
            🌟 You're now an AI Literacy Champion! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              🏠 Return to Home
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              🔄 Play Again
            </button>
          </div>
        </div>

        {/* Share Message */}
        <div className="mt-8 text-sm text-white/70 bg-white/5 p-4 rounded-lg">
          <p className="mb-2">🚀 <strong>Mission Complete!</strong> Share your AI knowledge with others and continue learning about responsible AI use.</p>
          <p>Together, we can build a future where AI enhances human potential while respecting our values and privacy.</p>
        </div>
      </div>
    </div>
  );
};