import { useState, useEffect } from 'react';

export default function PromptingChallenge({ onComplete }) {
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const badPrompt = "make it good";
  const badResponses = [
    "I'm not sure what you want me to make good. Could you be more specific?",
    "What would you like me to improve? Please provide more details.",
    "I need more context. What should I make good and how?"
  ];

  const goodPromptExamples = [
    "write a professional email to schedule a meeting with my team",
    "create a summary of this quarterly sales report in 3 bullet points",
    "explain quantum physics concepts in simple terms for beginners",
    "translate this paragraph to Spanish maintaining formal tone"
  ];

  useEffect(() => {
    // Simulate AI confusion with bad prompt
    setAiResponse(badResponses[Math.floor(Math.random() * badResponses.length)]);
  }, []);

  const checkPrompt = () => {
    setIsProcessing(true);
    const input = userInput.toLowerCase().trim();
    
    setTimeout(() => {
      const isGood = input.length > 15 && 
        (input.includes('write') || input.includes('create') || input.includes('explain') || 
         input.includes('translate') || input.includes('summarize') || input.includes('generate')) &&
        (input.includes('professional') || input.includes('summary') || input.includes('simple') || 
         input.includes('spanish') || input.includes('email') || input.includes('report') || 
         input.includes('meeting') || input.includes('bullet points'));

      setIsProcessing(false);
      
      if (isGood) {
        setAiResponse("✅ Perfect! Now I understand exactly what you need. Processing your request...");
        setTimeout(() => onComplete(), 2000);
      } else {
        setAttempts(prev => prev + 1);
        setAiResponse("❌ I'm still not clear on what you want. Try being more specific about the task and format.");
        if (attempts >= 1) setShowHint(true);
      }
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg rounded-xl p-8 text-white border border-orange-400/30">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">🗣️</div>
        <div>
          <h3 className="text-2xl font-bold text-orange-300">Communication Protocol</h3>
          <p className="text-sm text-orange-200">Clear prompts = Better results</p>
        </div>
      </div>

      <div className="bg-red-900/30 p-6 rounded-lg border border-red-400/20 mb-6">
        <h4 className="text-lg font-bold text-red-300 mb-3">⚠️ System Error Detected</h4>
        <p className="mb-4">I received this unclear request:</p>
        <div className="bg-red-800/40 p-4 rounded-lg border-l-4 border-red-400 mb-4">
          <p className="font-mono text-red-200">"{badPrompt}"</p>
        </div>
        
        <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-600">
          <div className="flex items-start">
            <div className="text-2xl mr-3">🤖</div>
            <div>
              <p className="text-sm text-gray-300 mb-2">AI Response:</p>
              <p className="text-gray-200 italic">"{aiResponse}"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-orange-300 mb-3">
          💡 Rephrase the request to be more specific:
        </label>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter a clear, specific prompt with action words and context..."
          className="w-full p-4 rounded-lg bg-white/10 border border-orange-400/30 text-white placeholder-white/60 focus:border-orange-400 focus:outline-none"
          rows={3}
        />
      </div>

      <button
        onClick={checkPrompt}
        disabled={!userInput.trim() || isProcessing}
        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 mb-6"
      >
        {isProcessing ? '🔄 Processing...' : '📤 Send Prompt'}
      </button>

      {showHint && (
        <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-400/30 mb-4">
          <h4 className="text-lg font-bold text-yellow-300 mb-3">💡 Helpful Tips</h4>
          <ul className="space-y-2 text-yellow-200">
            <li>• Use action words: write, create, explain, translate, summarize</li>
            <li>• Specify the format: email, bullet points, simple terms</li>
            <li>• Provide context: professional, beginner-friendly, formal tone</li>
          </ul>
          
          <div className="mt-4 p-4 bg-yellow-800/20 rounded">
            <p className="text-sm text-yellow-200 mb-2"><strong>Good Examples:</strong></p>
            <div className="space-y-1 text-xs">
              {goodPromptExamples.map((example, index) => (
                <p key={index} className="text-yellow-100 italic">"{example}"</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {attempts > 0 && !showHint && (
        <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-400/30">
          <p className="text-orange-300">
            🎯 Try being more specific about what you want me to do and how you want it formatted.
          </p>
        </div>
      )}

      <div className="mt-6 bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
        <p className="text-blue-300 text-sm">
          💡 <strong>Did You Know?</strong> Clear, specific prompts can improve AI response quality by up to 80%!
        </p>
      </div>
    </div>
  );
};