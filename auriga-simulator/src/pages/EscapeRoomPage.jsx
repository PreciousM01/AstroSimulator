import { useState } from 'react';
import AIBasicsChallenge from '../components/escaperoom/AIBasicsChallenge';
import PromptingChallenge from '../components/escaperoom/PromptingChallenge';
import PrivacyChallenge from '../components/escaperoom/PrivacyChallenge';
import ConsciousnessChallenge from '../components/escaperoom/ConsciousnessChallenge';
import ResponsibleAIChallenge from '../components/escaperoom/ResponsibleAIChallenge';
import GameComplete from '../components/escaperoom/GameComplete';

const EscapeRoomPage = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const challenges = [
    { component: AIBasicsChallenge, title: "AI Basics" },
    { component: PromptingChallenge, title: "Clear Communication" },
    { component: PrivacyChallenge, title: "Data Privacy" },
    { component: ConsciousnessChallenge, title: "AI Understanding" },
    { component: ResponsibleAIChallenge, title: "Responsible AI" }
  ];

  const completeChallenge = (challengeIndex) => {
    setCompletedChallenges([...completedChallenges, challengeIndex]);
    if (challengeIndex < challenges.length - 1) {
      setCurrentChallenge(challengeIndex + 1);
    }
  };

  const isGameComplete = completedChallenges.length === challenges.length;

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-2xl text-center text-white">
          <h1 className="text-4xl font-bold mb-6">AI Escape Room</h1>
          <p className="text-lg mb-8">
            Welcome to TechCorp! Our AI assistant has encountered a glitch causing security lockdowns. 
            Help restore normal functions by solving AI-related puzzles.
          </p>
          <button 
            onClick={() => setGameStarted(true)}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-xl font-semibold transition-colors"
          >
            Start Mission
          </button>
        </div>
      </div>
    );
  }

  if (isGameComplete) {
    return <GameComplete />;
  }

  const CurrentChallengeComponent = challenges[currentChallenge].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center text-white">
            <h2 className="text-2xl font-bold">{challenges[currentChallenge].title}</h2>
            <div className="text-sm">
              Challenge {currentChallenge + 1} of {challenges.length}
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mt-4">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedChallenges.length / challenges.length) * 100}%` }}
            />
          </div>
        </div>
        
        <CurrentChallengeComponent 
          onComplete={() => completeChallenge(currentChallenge)}
        />
      </div>
    </div>
  );
};

export default EscapeRoomPage;