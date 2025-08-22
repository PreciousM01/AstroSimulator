import { useState } from 'react';

const PrivacyChallenge = ({ onComplete }) => {
  const [selectedData, setSelectedData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const dataPoints = [
    { id: 1, text: "Your full name", private: true },
    { id: 2, text: "Weather preferences", private: false },
    { id: 3, text: "Social security number", private: true },
    { id: 4, text: "Favorite color", private: false },
    { id: 5, text: "Medical records", private: true },
    { id: 6, text: "Movie recommendations", private: false },
    { id: 7, text: "Bank account details", private: true },
    { id: 8, text: "Public social media posts", private: false }
  ];

  const privateData = dataPoints.filter(item => item.private).map(item => item.id);

  const toggleData = (dataId) => {
    setSelectedData(prev => 
      prev.includes(dataId) 
        ? prev.filter(id => id !== dataId)
        : [...prev, dataId]
    );
  };

  const checkAnswers = () => {
    const isCorrect = privateData.length === selectedData.length &&
      privateData.every(id => selectedData.includes(id));
    
    setShowResult(true);
    if (isCorrect) {
      setTimeout(() => onComplete(), 2000);
    }
  };

  const isCorrect = showResult && privateData.length === selectedData.length &&
    privateData.every(id => selectedData.includes(id));

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Data Privacy Vault</h3>
      <p className="mb-6 text-lg">
        Select which data points should remain private and not be shared with AI systems:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {dataPoints.map(item => (
          <button
            key={item.id}
            onClick={() => toggleData(item.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedData.includes(item.id)
                ? 'bg-red-600 border-red-400'
                : 'bg-white/5 border-white/20 hover:border-white/40'
            }`}
          >
            🔒 {item.text}
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswers}
        disabled={selectedData.length === 0 || showResult}
        className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Secure Vault
      </button>

      {showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
          {isCorrect ? (
            <p className="text-green-300">✓ Excellent! Personal identifiers, financial, and medical data should always remain private.</p>
          ) : (
            <p className="text-red-300">✗ Consider which information could be used to identify you or cause harm if misused.</p>
          )}
        </div>
      )}

      <div className="mt-6 bg-blue-600/20 p-4 rounded-lg">
        <p className="text-blue-300 text-sm">
          💡 Did you know? Always review privacy policies and avoid sharing sensitive personal information with AI systems.
        </p>
      </div>
    </div>
  );
};

export default PrivacyChallenge;