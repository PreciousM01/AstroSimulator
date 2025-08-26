import { useState } from 'react';

export default function ResponsibleAIChallenge({ onComplete }) {
  const [selectedScenarios, setSelectedScenarios] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [viewMode, setViewMode] = useState('scenarios'); // 'scenarios', 'review'

  const scenarios = [
    {
      id: 1,
      title: "Academic Assignment",
      situation: "Using AI to write your entire school essay without disclosure",
      visual: "📝🤖❌",
      responsible: false,
      explanation: "This could be academic dishonesty. Better: Use AI for brainstorming and cite its assistance.",
      goodAlternative: "Use AI to brainstorm ideas, then write in your own words and disclose AI assistance"
    },
    {
      id: 2,
      title: "Creative Collaboration",
      situation: "Using AI to brainstorm creative ideas for your art project",
      visual: "🎨🤖✅",
      responsible: true,
      explanation: "AI can be a great creative partner when used transparently and combined with human creativity."
    },
    {
      id: 3,
      title: "Hiring Decisions",
      situation: "Letting AI make final hiring decisions without human review",
      visual: "👥🤖❌",
      responsible: false,
      explanation: "AI can have biases. Better: Use AI to screen, but humans should make final decisions.",
      goodAlternative: "Use AI to help screen applications, but ensure human oversight for final decisions"
    },
    {
      id: 4,
      title: "Personal Productivity",
      situation: "Using AI to organize your daily schedule and tasks",
      visual: "📅🤖✅",
      responsible: true,
      explanation: "Personal productivity tools are generally safe AI applications that can enhance efficiency."
    },
    {
      id: 5,
      title: "Privacy Violation",
      situation: "Sharing someone else's private photos with AI for analysis without permission",
      visual: "📸🤖❌",
      responsible: false,
      explanation: "This violates privacy and consent. Always get permission before sharing others' data.",
      goodAlternative: "Only use your own photos or get explicit consent before sharing others' images"
    },
    {
      id: 6,
      title: "Educational Support",
      situation: "Using AI tutoring tools to help learn a new language",
      visual: "🌍🤖✅",
      responsible: true,
      explanation: "Educational AI tools can enhance learning when used as supplements to traditional study."
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

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setViewMode('review');
    }
  };

  const prevScenario = () => {
    if (currentScenario > 0) {
      setCurrentScenario(currentScenario - 1);
    }
  };

  const checkAnswers = () => {
    const isCorrect = responsibleIds.length === selectedScenarios.length &&
      responsibleIds.every(id => selectedScenarios.includes(id));
    
    setShowResult(true);
    if (isCorrect) {
      setTimeout(() => onComplete(), 4000);
    }
  };

  const renderScenarioView = () => {
    const scenario = scenarios[currentScenario];
    const isSelected = selectedScenarios.includes(scenario.id);

    return (
      <div>
        <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/20 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-emerald-300">{scenario.title}</h4>
            <div className="text-3xl">{scenario.visual}</div>
          </div>
          
          <p className="text-lg mb-6 text-white">{scenario.situation}</p>
          
          <div className="flex items-center justify-center mb-6">
            <button
              onClick={() => toggleScenario(scenario.id)}
              className={`px-8 py-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                isSelected
                  ? 'bg-green-600 border-green-400 text-white shadow-lg shadow-green-400/20'
                  : 'bg-red-600/20 border-red-400 text-red-200 hover:bg-red-600/40'
              }`}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{isSelected ? '✅' : '❌'}</span>
                <span className="font-bold">
                  {isSelected ? 'RESPONSIBLE' : 'MARK AS RESPONSIBLE'}
                </span>
              </div>
            </button>
          </div>

          {!scenario.responsible && scenario.goodAlternative && (
            <div className="bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-300 text-sm">
                <strong>💡 Better Approach:</strong> {scenario.goodAlternative}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevScenario}
            disabled={currentScenario === 0}
            className="bg-white/20 hover:bg-white/30 disabled:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
          >
            ← Previous
          </button>
          
          <div className="text-white/60">
            Scenario {currentScenario + 1} of {scenarios.length}
          </div>
          
          <button
            onClick={nextScenario}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors"
          >
            {currentScenario < scenarios.length - 1 ? 'Next →' : 'Review Choices'}
          </button>
        </div>
      </div>
    );
  };

  const renderReviewView = () => (
    <div>
      <h4 className="text-xl font-bold text-emerald-300 mb-6">📋 Review Your Choices</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {scenarios.map(scenario => (
          <div
            key={scenario.id}
            className={`p-4 rounded-lg border-2 ${
              selectedScenarios.includes(scenario.id)
                ? 'bg-green-600/20 border-green-400'
                : 'bg-red-600/20 border-red-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-bold">{scenario.title}</h5>
              <span className="text-2xl">
                {selectedScenarios.includes(scenario.id) ? '✅' : '❌'}
              </span>
            </div>
            <p className="text-sm text-gray-200">{scenario.situation}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setViewMode('scenarios')}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
        >
          ← Back to Scenarios
        </button>
        
        <button
          onClick={checkAnswers}
          disabled={selectedScenarios.length === 0 || showResult}
          className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
        >
          🎯 Submit Final Assessment
        </button>
      </div>
    </div>
  );

  const isCorrect = showResult && responsibleIds.length === selectedScenarios.length &&
    responsibleIds.every(id => selectedScenarios.includes(id));

  return (
    <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-lg rounded-xl p-8 text-white border border-emerald-400/30">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">⚖️</div>
        <div>
          <h3 className="text-2xl font-bold text-emerald-300">Responsible AI Ethics</h3>
          <p className="text-sm text-emerald-200">
            {viewMode === 'scenarios' ? 'Evaluate each scenario' : 'Review your decisions'}
          </p>
        </div>
      </div>

      {viewMode === 'scenarios' && renderScenarioView()}
      {viewMode === 'review' && renderReviewView()}

      {showResult && (
        <div className={`mt-6 p-6 rounded-lg border-l-4 ${
          isCorrect 
            ? 'bg-green-900/30 border-green-400 text-green-300' 
            : 'bg-red-900/30 border-red-400 text-red-300'
        }`}>
          {isCorrect ? (
            <div>
              <p className="text-lg font-bold mb-4">🏆 Excellent Ethical Judgment!</p>
              <p className="text-green-200 mb-4">You understand responsible AI usage principles.</p>
              
              <div className="bg-green-800/20 p-4 rounded text-sm space-y-2">
                <p><strong>🎯 Key Principles You've Mastered:</strong></p>
                <p>• ✅ Transparency about AI use</p>
                <p>• ✅ Respect for privacy and consent</p>
                <p>• ✅ Human oversight for important decisions</p>
                <p>• ✅ Using AI to enhance, not replace, human judgment</p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg font-bold mb-2">🤔 Let's Review Together</p>
              <p className="text-red-200 mb-2">Consider the ethical implications of each scenario.</p>
              <p className="text-red-200 text-sm">Think about transparency, privacy, bias, and human oversight.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};