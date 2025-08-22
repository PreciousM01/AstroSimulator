import { useState } from 'react';
import BackgroundVideo from '../components/shared/BackgroundVideo';

export default function VisualizePage() {
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    const [viewMode, setViewMode] = useState(null);
    const [selectedSubhalo, setSelectedSubhalo] = useState(null);
    const [step, setStep] = useState('galaxy'); // 'galaxy', 'viewMode', 'subhalo', 'settings'

    const galaxies = Array.from({length: 31}, (_, i) => ({
        id: i,
        name: `Auriga ${i}`,
        mass: `${(Math.random() * 5 + 1).toFixed(1)} × 10¹² M☉`,
        subhalos: Math.floor(Math.random() * 50 + 20)
    }));

    const handleGalaxySelect = (galaxy) => {
        setSelectedGalaxy(galaxy);
        setStep('viewMode');
    };

    const handleViewModeSelect = (mode) => {
        setViewMode(mode);
        if (mode === 'isolated') {
            setStep('subhalo');
        } else {
            setStep('settings');
        }
    };

    const renderGalaxySelection = () => (
        <div>
            <h2 className="text-4xl font-bold text-white mb-8">Select Auriga Galaxy</h2>
            <p className="text-lg text-gray-200 mb-8">Choose from 31 different galaxy simulations</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-96 overflow-y-auto">
                {galaxies.map((galaxy) => (
                    <button
                        key={galaxy.id}
                        onClick={() => handleGalaxySelect(galaxy)}
                        className="bg-white/10 hover:bg-blue-600/30 p-4 rounded-lg transition-colors border border-white/20 hover:border-blue-400"
                    >
                        <div className="text-2xl mb-2">🌌</div>
                        <div className="text-white font-semibold">{galaxy.name}</div>
                        <div className="text-xs text-gray-300 mt-1">{galaxy.mass}</div>
                        <div className="text-xs text-gray-400">{galaxy.subhalos} subhalos</div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderViewModeSelection = () => (
        <div>
            <h2 className="text-4xl font-bold text-white mb-4">Choose View Mode</h2>
            <p className="text-lg text-gray-200 mb-8">Selected: {selectedGalaxy.name}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button
                    onClick={() => handleViewModeSelect('isolated')}
                    className="bg-white/10 hover:bg-purple-600/30 p-8 rounded-lg transition-colors border border-white/20 hover:border-purple-400 text-left"
                >
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Isolated View</h3>
                    <p className="text-gray-200">Focus on individual subhalos in isolation. Perfect for detailed analysis of specific structures and their evolution.</p>
                </button>
                
                <button
                    onClick={() => handleViewModeSelect('whole')}
                    className="bg-white/10 hover:bg-green-600/30 p-8 rounded-lg transition-colors border border-white/20 hover:border-green-400 text-left"
                >
                    <div className="text-4xl mb-4">🌌</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Whole View</h3>
                    <p className="text-gray-200">See the complete galaxy with all subhalos interacting. Ideal for understanding large-scale structure formation.</p>
                </button>
            </div>
            
            <button 
                onClick={() => setStep('galaxy')}
                className="mt-6 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
                ← Back to Galaxy Selection
            </button>
        </div>
    );

    const renderSubhaloSelection = () => {
        const subhalos = Array.from({length: selectedGalaxy.subhalos}, (_, i) => ({
            id: i,
            mass: `${(Math.random() * 2 + 0.1).toFixed(2)} × 10¹⁰ M☉`,
            distance: `${(Math.random() * 100 + 10).toFixed(0)} kpc`
        }));

        return (
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Select Subhalo</h2>
                <p className="text-lg text-gray-200 mb-8">{selectedGalaxy.name} - Isolated View</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-96 overflow-y-auto mb-6">
                    {subhalos.map((subhalo) => (
                        <button
                            key={subhalo.id}
                            onClick={() => {
                                setSelectedSubhalo(subhalo);
                                setStep('settings');
                            }}
                            className="bg-white/10 hover:bg-yellow-600/30 p-4 rounded-lg transition-colors border border-white/20 hover:border-yellow-400"
                        >
                            <div className="text-xl mb-2">⭐</div>
                            <div className="text-white font-semibold">Subhalo {subhalo.id}</div>
                            <div className="text-xs text-gray-300">{subhalo.mass}</div>
                            <div className="text-xs text-gray-400">{subhalo.distance}</div>
                        </button>
                    ))}
                </div>
                
                <button 
                    onClick={() => setStep('viewMode')}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                    ← Back to View Mode
                </button>
            </div>
        );
    };

    const renderSettings = () => (
        <div>
            <h2 className="text-4xl font-bold text-white mb-4">Simulation Settings</h2>
            <p className="text-lg text-gray-200 mb-8">
                {selectedGalaxy.name} - {viewMode === 'isolated' ? `Subhalo ${selectedSubhalo?.id} (Isolated)` : 'Whole Galaxy'}
            </p>
            
            <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Video Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-white mb-2">Resolution</label>
                            <select className="w-full bg-white/20 text-white p-2 rounded border border-white/30">
                                <option>1080p (1920×1080)</option>
                                <option>4K (3840×2160)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-white mb-2">Duration</label>
                            <select className="w-full bg-white/20 text-white p-2 rounded border border-white/30">
                                <option>30 seconds</option>
                                <option>1 minute</option>
                                <option>2 minutes</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between">
                    <button 
                        onClick={() => setStep(viewMode === 'isolated' ? 'subhalo' : 'viewMode')}
                        className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                    >
                        ← Back
                    </button>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all">
                        Generate Simulation
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen">
            <BackgroundVideo />
            
            <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">
                <div className="w-[70%] ml-8">
                    <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl">
                        {step === 'galaxy' && renderGalaxySelection()}
                        {step === 'viewMode' && renderViewModeSelection()}
                        {step === 'subhalo' && renderSubhaloSelection()}
                        {step === 'settings' && renderSettings()}
                    </div>
                </div>
            </div>
        </div>
    );
}