import { useState } from 'react';

export default function ConsciousnessChallenge({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const steps = [
    {
      title: "Pattern Recognition Demo",
      content: "Watch how I process this image:",
      visual: "🖼️ → 🤖 → 🏷️",
      explanation: "I see pixels, find patterns I've learned, and output 'cat' - but I don't 'see' a cat like you do."
    },
    {
      title: "Training Data Limitation",
      content: "I was trained on millions of images of cats and dogs, but never saw a 'catdog' hybrid.",
      question: "What would I likely do with this new image?",
      options: [
        { id: 'a', text: "Understand it's a new creature", correct: false },
        { id: 'b', text: "Try to match it to familiar patterns", correct: true },
        { id: 'c', text: "Feel confused like a human would", correct: false }
      ]
    },
    {
      title: "The Pattern Matching Reality",
      content: "When you ask me to write a poem, I don't feel creative inspiration.",
      visual: "📝 → 🔍 → 📊 → ✍️",
      explanation: "I find patterns in millions of poems I've seen and recombine them mathematically."
    }
  ];

  const handleAnswer = (stepIndex, answerId) => {
    setUserAnswers(prev => ({ ...prev, [stepIndex]: answerId }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      checkFinalAnswer();
    }
  };

  const checkFinalAnswer = () => {
    const correctAnswers = steps.filter(step => step.options).every(step => {
      const stepIndex = steps.indexOf(step);
      const userAnswer = userAnswers[stepIndex];
      return step.options.find(opt => opt.id === userAnswer)?.correct;
    });

    setShowResult(true);
    if (correctAnswers) {
      setTimeout(() => onComplete(), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-xl p-8 text-white border border-purple-400/30">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4 animate-bounce">🧠</div>
        <div>
          <h3 className="text-2xl font-bold text-purple-300">Understanding AI Processing</h3>
          <p className="text-sm text-purple-200">Step {currentStep + 1} of {steps.length}</p>
        </div>
      </div>

      <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20 mb-6">
        <h4 className="text-xl font-bold text-purple-300 mb-4">{steps[currentStep].title}</h4>
        
        {steps[currentStep].visual && (
          <div className="text-center text-3xl mb-4 p-4 bg-white/10 rounded-lg">
            {steps[currentStep].visual}
          </div>
        )}

        <p className="text-lg mb-4">{steps[currentStep].content}</p>

        {steps[currentStep].explanation && (
          <div className="bg-indigo-800/30 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <p className="text-indigo-200">{steps[currentStep].explanation}</p>
          </div>
        )}

        {steps[currentStep].options && (
          <div className="space-y-3 mb-4">
            <p className="font-semibold text-purple-200">{steps[currentStep].question}</p>
            {steps[currentStep].options.map(option => (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentStep, option.id)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  userAnswers[currentStep] === option.id
                    ? 'bg-purple-600 border-purple-400'
                    : 'bg-white/5 border-white/20 hover:border-purple-400/50'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {!showResult && (
        <button
          onClick={nextStep}
          disabled={steps[currentStep].options && !userAnswers[currentStep]}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
        >
          {currentStep < steps.length - 1 ? 'Next Step →' : 'Complete Analysis'}
        </button>
      )}

      {showResult && (
        <div className="bg-green-900/30 border-green-400 border-l-4 p-6 rounded-lg">
          <p className="text-lg font-bold text-green-300 mb-2">🎯 Understanding Complete!</p>
          <p className="text-green-200 mb-4">You now understand that AI processes patterns mathematically, without consciousness or understanding like humans.</p>
          <div className="bg-green-800/20 p-4 rounded text-sm">
            💡 <strong>Did You Know?</strong> Even the most advanced AI systems are sophisticated pattern-matching machines, not conscious entities.
          </div>
        </div>
      )}
    </div>
  );
};