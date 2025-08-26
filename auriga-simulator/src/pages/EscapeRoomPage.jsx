import { useState, useEffect } from 'react';
import AIBasicsChallenge from '../components/escaperoom/AIBasicsChallenge';
import PromptingChallenge from '../components/escaperoom/PromptingChallenge';
import PrivacyChallenge from '../components/escaperoom/PrivacyChallenge';
import ConsciousnessChallenge from '../components/escaperoom/ConsciousnessChallenge';
import ResponsibleAIChallenge from '../components/escaperoom/ResponsibleAIChallenge';
import GameComplete from '../components/escaperoom/GameComplete';

export default function EscapeRoomPage() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [aiAnnouncement, setAiAnnouncement] = useState('');
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const challenges = [
    { component: AIBasicsChallenge, title: "System Calibration", icon: "🤖" },
    { component: PromptingChallenge, title: "Communication Protocol", icon: "💬" },
    { component: PrivacyChallenge, title: "Data Security", icon: "🔒" },
    { component: ConsciousnessChallenge, title: "Core Understanding", icon: "🧠" },
    { component: ResponsibleAIChallenge, title: "Ethics Module", icon: "⚖️" }
  ];

  const announcements = [
    "🔊 Welcome to TechCorp! I'm your AI assistant, and I need your help...",
    "🔧 System diagnostic complete. Proceeding to next module...",
    "🛡️ Security protocols activated. Analyzing data privacy settings...",
    "🧩 Core processing analysis initiated. Understanding my limitations...",
    "⚖️ Ethics module loading. Evaluating responsible usage scenarios...",
    "✅ All systems restored! Thank you for your assistance!"
  ];

  useEffect(() => {
    if (gameStarted) {
      const timer = setTimeout(() => {
        setAiAnnouncement(announcements[currentChallenge]);
        setShowAnnouncement(true);
        setTimeout(() => setShowAnnouncement(false), 4000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentChallenge, gameStarted]);

  const completeChallenge = (challengeIndex) => {
    setCompletedChallenges([...completedChallenges, challengeIndex]);
    if (challengeIndex < challenges.length - 1) {
      setTimeout(() => {
        setCurrentChallenge(challengeIndex + 1);
      }, 1000);
    }
  };

  const isGameComplete = completedChallenges.length === challenges.length;

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 text-4xl animate-pulse opacity-30">💻</div>
          <div className="absolute top-40 right-32 text-3xl animate-bounce opacity-20">🔧</div>
          <div className="absolute bottom-32 left-32 text-5xl animate-pulse opacity-25">🤖</div>
          <div className="absolute bottom-20 right-20 text-4xl animate-bounce opacity-30">⚡</div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-10 max-w-4xl text-center text-white relative z-10 border border-cyan-400/30">
          <div className="text-8xl mb-6 animate-pulse">🏢</div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            TechCorp AI Emergency
          </h1>
          
          <div className="bg-red-900/30 p-6 rounded-lg border border-red-400/30 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-4 animate-pulse">🚨</div>
              <h2 className="text-2xl font-bold text-red-300">SYSTEM MALFUNCTION DETECTED</h2>
            </div>
            <p className="text-lg text-red-200">
              Our AI assistant has encountered a critical glitch causing random security lockdowns throughout the building. 
              As our newest team members, you're our only hope to restore normal operations!
            </p>
          </div>

          <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-400/30 mb-8">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">🎯 Your Mission</h3>
            <p className="text-lg text-cyan-100 leading-relaxed">
              Help our AI understand its capabilities, learn to communicate better, protect sensitive data, 
              recognize its limitations, and operate ethically. Complete all 5 diagnostic modules to restore full functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="text-3xl mb-2">{challenge.icon}</div>
                <div className="text-sm font-semibold">{challenge.title}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setGameStarted(true)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-10 py-4 rounded-lg text-2xl font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Begin Emergency Protocol
          </button>

          <div className="mt-6 text-sm text-white/70">
            <p>⏱️ Estimated completion time: 15-20 minutes</p>
            <p>👥 Perfect for teams or individual learning</p>
          </div>
        </div>
      </div>
    );
  }

  if (isGameComplete) {
    return <GameComplete />;
  }

  const CurrentChallengeComponent = challenges[currentChallenge].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 relative">
      {/* AI Announcement Overlay */}
      {showAnnouncement && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-lg text-white p-4 rounded-lg border border-cyan-400/50 animate-pulse">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🤖</div>
            <p className="font-semibold">{aiAnnouncement}</p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-cyan-400/30">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="text-3xl mr-4">{challenges[currentChallenge].icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-cyan-300">{challenges[currentChallenge].title}</h2>
                <p className="text-cyan-200">Module {currentChallenge + 1} of {challenges.length}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/70 mb-2">System Restoration Progress</div>
              <div className="text-2xl font-bold text-green-400">
                {Math.round((completedChallenges.length / challenges.length) * 100)}%
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-3 mt-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full transition-all duration-1000 shadow-lg"
              style={{ width: `${(completedChallenges.length / challenges.length) * 100}%` }}
            />
          </div>
          
          {/* Challenge Status Indicators */}
          <div className="flex justify-center mt-4 space-x-4">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className={`flex items-center px-3 py-2 rounded-lg transition-all ${
                  completedChallenges.includes(index) 
                    ? 'bg-green-600/30 border border-green-400' 
                    : index === currentChallenge 
                      ? 'bg-cyan-600/30 border border-cyan-400 animate-pulse' 
                      : 'bg-white/10 border border-white/20'
                }`}
              >
                <span className="text-lg mr-2">{challenge.icon}</span>
                <span className="text-sm font-medium">
                  {completedChallenges.includes(index) ? '✅' : index === currentChallenge ? '🔄' : '⏳'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Challenge */}
        <CurrentChallengeComponent 
          onComplete={() => completeChallenge(currentChallenge)}
        />
      </div>
    </div>
  );
};