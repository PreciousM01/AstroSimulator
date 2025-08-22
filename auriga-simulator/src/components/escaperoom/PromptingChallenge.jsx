import { useState } from 'react';

const PromptingChallenge = ({ onComplete }) => {
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const badPrompt = "make it good";
  const goodPrompts = [
    "write a professional email to schedule a meeting",
    "create a summary of this quarterly report",
    "translate this text to spanish",
    "explain quantum physics in simple terms"
  ];

  const checkPrompt = () => {
    const input = userInput.toLowerCase().trim();
    const isGood = input.length > 20 && 
      (input.includes('write') || input.includes('create') || input.includes('explain') || input.includes('translate')) &&
      (input.includes('professional') || input.includes('summary') || input.includes('simple') || input.includes('spanish'));

    if (isGood) {
      onComplete();
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 1) setShowHint(true);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Communication Protocol</h3>
      <p className="mb-4 text-lg">
        The AI received this unclear request: <span className="bg-red-600/30 px-2 py-1 rounded">"{badPrompt}"</span>
      </p>
      <p className="mb-6">
        Rephrase it to be more specific and actionable to unlock the next system:
      </p>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a clear, specific prompt..."
        className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 mb-4"
        rows={3}
      />

      <button
        onClick={checkPrompt}
        disabled={!userInput.trim()}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
      >
        Submit Prompt
      </button>

      {showHint && (
        <div className="bg-yellow-600/20 p-4 rounded-lg mb-4">
          <p className="text-yellow-300">
            💡 Hint: Good prompts are specific, include action words (write, create, explain), and provide context.
          </p>
        </div>
      )}

      {attempts > 0 && (
        <div className="bg-orange-600/20 p-4 rounded-lg">
          <p className="text-orange-300">
            Try being more specific about what you want the AI to do and how you want it done.
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptingChallenge;