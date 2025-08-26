import { useState } from 'react';

export default function PrivacyChallenge({ onComplete }) {
  const [foundClues, setFoundClues] = useState([]);
  const [selectedPrivate, setSelectedPrivate] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('hunt'); // 'hunt', 'classify', 'result'

  const hiddenClues = [
    { id: 1, text: "Social Security Number", icon: "🆔", private: true, location: "filing cabinet" },
    { id: 2, text: "Favorite Pizza Topping", icon: "🍕", private: false, location: "desk drawer" },
    { id: 3, text: "Bank Account Number", icon: "💳", private: true, location: "computer screen" },
    { id: 4, text: "Public Instagram Posts", icon: "📸", private: false, location: "phone" },
    { id: 5, text: "Medical Prescription", icon: "💊", private: true, location: "briefcase" },
    { id: 6, text: "Weather Preference", icon: "🌤️", private: false, location: "notebook" },
    { id: 7, text: "Home Address", icon: "🏠", private: true, location: "mail envelope" },
    { id: 8, text: "Movie Ratings", icon: "⭐", private: false, location: "tablet" }
  ];

  const locations = [
    { name: "filing cabinet", icon: "🗄️", clues: [1] },
    { name: "desk drawer", icon: "📝", clues: [2] },
    { name: "computer screen", icon: "💻", clues: [3] },
    { name: "phone", icon: "📱", clues: [4] },
    { name: "briefcase", icon: "💼", clues: [5] },
    { name: "notebook", icon: "📔", clues: [6] },
    { name: "mail envelope", icon: "✉️", clues: [7] },
    { name: "tablet", icon: "📱", clues: [8] }
  ];

  const searchLocation = (location) => {
    const newClues = location.clues.filter(clueId => !foundClues.includes(clueId));
    if (newClues.length > 0) {
      setFoundClues(prev => [...prev, ...newClues]);
    }
  };

  const togglePrivate = (clueId) => {
    setSelectedPrivate(prev => 
      prev.includes(clueId) 
        ? prev.filter(id => id !== clueId)
        : [...prev, clueId]
    );
  };

  const submitClassification = () => {
    const privateClues = hiddenClues.filter(clue => clue.private).map(clue => clue.id);
    const isCorrect = privateClues.length === selectedPrivate.length &&
      privateClues.every(id => selectedPrivate.includes(id));
    
    setShowResult(true);
    setCurrentPhase('result');
    if (isCorrect) {
      setTimeout(() => onComplete(), 3000);
    }
  };

  const renderClueHunt = () => (
    <div>
      <h4 className="text-xl font-bold text-purple-300 mb-4">🔍 Search for Hidden Data Clues</h4>
      <p className="text-purple-200 mb-6">Click on different locations to find data points scattered around the room:</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {locations.map((location, index) => {
          const hasClues = location.clues.some(clueId => !foundClues.includes(clueId));
          const isSearched = location.clues.every(clueId => foundClues.includes(clueId));
          
          return (
            <button
              key={index}
              onClick={() => searchLocation(location)}
              disabled={isSearched}
              className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                isSearched 
                  ? 'bg-green-600/30 border-green-400 cursor-not-allowed' 
                  : hasClues 
                    ? 'bg-purple-600/20 border-purple-400 hover:bg-purple-600/40 animate-pulse' 
                    : 'bg-gray-600/20 border-gray-400'
              }`}
            >
              <div className="text-3xl mb-2">{location.icon}</div>
              <div className="text-sm font-medium">{location.name}</div>
              {isSearched && <div className="text-xs text-green-300 mt-1">✓ Searched</div>}
            </button>
          );
        })}
      </div>

      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/20">
        <h5 className="font-bold text-purple-300 mb-2">Found Clues ({foundClues.length}/8):</h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {foundClues.map(clueId => {
            const clue = hiddenClues.find(c => c.id === clueId);
            return (
              <div key={clueId} className="bg-white/10 p-2 rounded text-center">
                <div className="text-lg">{clue.icon}</div>
                <div className="text-xs">{clue.text}</div>
              </div>
            );
          })}
        </div>
      </div>

      {foundClues.length === 8 && (
        <button
          onClick={() => setCurrentPhase('classify')}
          className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
        >
          Proceed to Classification →
        </button>
      )}
    </div>
  );

  const renderClassification = () => (
    <div>
      <h4 className="text-xl font-bold text-purple-300 mb-4">🔒 Classify Data Privacy</h4>
      <p className="text-purple-200 mb-6">Select which data points should remain PRIVATE and not be shared with AI systems:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {hiddenClues.map(clue => (
          <button
            key={clue.id}
            onClick={() => togglePrivate(clue.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedPrivate.includes(clue.id)
                ? 'bg-red-600/40 border-red-400 shadow-lg shadow-red-400/20'
                : 'bg-white/5 border-white/20 hover:border-purple-400/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{clue.icon}</span>
                <span className="font-medium">{clue.text}</span>
              </div>
              <span className="text-xl">{selectedPrivate.includes(clue.id) ? '🔒' : '🔓'}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={submitClassification}
        disabled={selectedPrivate.length === 0}
        className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
      >
        🔐 Secure Private Data
      </button>
    </div>
  );

  const isCorrect = showResult && hiddenClues.filter(clue => clue.private).length === selectedPrivate.length &&
    hiddenClues.filter(clue => clue.private).every(clue => selectedPrivate.includes(clue.id));

  return (
    <div className="bg-gradient-to-br from-purple-900/40 to-red-900/40 backdrop-blur-lg rounded-xl p-8 text-white border border-purple-400/30">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">🕵️</div>
        <div>
          <h3 className="text-2xl font-bold text-purple-300">Data Privacy Investigation</h3>
          <p className="text-sm text-purple-200">Phase: {currentPhase === 'hunt' ? 'Clue Hunt' : currentPhase === 'classify' ? 'Classification' : 'Results'}</p>
        </div>
      </div>

      {currentPhase === 'hunt' && renderClueHunt()}
      {currentPhase === 'classify' && renderClassification()}

      {showResult && (
        <div className={`mt-6 p-6 rounded-lg border-l-4 ${
          isCorrect 
            ? 'bg-green-900/30 border-green-400 text-green-300' 
            : 'bg-red-900/30 border-red-400 text-red-300'
        }`}>
          {isCorrect ? (
            <div>
              <p className="text-lg font-bold mb-2">🎯 Excellent Privacy Awareness!</p>
              <p className="text-green-200 mb-4">You correctly identified that personal identifiers, financial data, medical information, and addresses should remain private.</p>
              <div className="bg-green-800/20 p-4 rounded text-sm">
                💡 <strong>Did You Know?</strong> Always review privacy policies and avoid sharing sensitive personal information with AI systems.
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg font-bold mb-2">🔍 Review Your Choices</p>
              <p className="text-red-200">Consider which information could be used to identify you or cause harm if misused.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};