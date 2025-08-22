import { useState } from 'react';

const ResponsibleAIChallenge = ({ onComplete }) => {
  const [selectedScenarios, setSelectedScenarios] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const scenarios = [
    {
      id: 1,
      situation: "Using AI to help write a school essay",
      responsible: false,
      explanation: "This could be academic dishonesty if not disclosed"
    },
    {
      id: 2,
      situation: "Using AI to brainstorm ideas for a project",
      responsible: true,
      explanation: "AI can be a great creative partner when used transparently"
    },
    {
      id: 3,
      situation: "Letting AI make hiring decisions without human oversight",
      responsible: false,
      explanation: "AI can have biases that need human review"
    },
    {
      id: 4,
      situation: "Using AI to help organize your schedule",
      responsible: true,
      explanation: "Personal productivity tools are generally safe AI applications"
    },
    {
      id: 5,
      situation: "Sharing someone else's private photos with AI for analysis",
      responsible: false,
      explanation: "This violates privacy and consent"
    },
    {
      id: 6,
      situation: "Using AI to help learn a new language",
      responsible: true,
      explanation: "Educational AI tools can enhance learning when used properly"
    }
  ];

  const responsibleIds = scenarios.filter(s => s.responsible).map(s => s.id);

  const toggleScenario = (scenarioId) => {
    setSelectedScenarios(prev => 
      prev.includes(scenarioId) 
        ? prev.filter(id => id !== scenarioId)
        : [...prev, scenarioId]
    );
  };

  const checkAnswers = () => {
    const isCorrect = responsibleIds.length === selectedScenarios.length &&
      responsibleIds.every(id => selectedScenarios.includes(id));
    
    setShowResult(true);
    if (isCorrect) {
      setTimeout(() => onComplete(), 3000);
    }
  };

  const isCorrect = showResult && responsibleIds.length === selectedScenarios.length &&
    responsibleIds.every(id => selectedScenarios.includes(id));

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Responsible AI Usage</h3>
      <p className="mb-6 text-lg">
        Select the scenarios that represent responsible AI usage:
      </p>
      
      <div className="space-y-4 mb-8">
        {scenarios.map(scenario => (
          <button
            key={scenario.id}
            onClick={() => toggleScenario(scenario.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedScenarios.includes(scenario.id)
                ? 'bg-green-600 border-green-400'
                : 'bg-white/5 border-white/20 hover:border-white/40'
            }`}
          >
            <div className="flex items-start">
              <span className="mr-3 text-2xl">
                {selectedScenarios.includes(scenario.id) ? '✓' : '○'}
              </span>
              <span>{scenario.situation}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswers}
        disabled={selectedScenarios.length === 0 || showResult}
        className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Submit Choices
      </button>

      {showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
          {isCorrect ? (
            <div>
              <p className="text-green-300 mb-4">✓ Excellent! You understand responsible AI usage.</p>
              <div className="text-green-200 text-sm space-y-2">
                <p><strong>Key principles:</strong></p>
                <p>• Be transparent about AI use</p>
                <p>• Respect privacy and consent</p>
                <p>• Maintain human oversight for important decisions</p>
                <p>• Use AI as a tool to enhance, not replace, human judgment</p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-red-300 mb-2">✗ Consider the ethical implications of each scenario.</p>
              <p className="text-red-200 text-sm">Think about transparency, privacy, bias, and human oversight.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponsibleAIChallenge;