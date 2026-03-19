import { useState } from 'react';
import BackgroundVideo from '../components/shared/BackgroundVideo';
import SimulateButton from '../components/simulate/SimulateButton';

export default function VisualizePage() {
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    const [viewMode, setViewMode] = useState(null);
    const [selectedSubhalo, setSelectedSubhalo] = useState(null);
    const [step, setStep] = useState('galaxy'); // 'galaxy', 'viewMode', 'subhalo', 'settings'
    const [timeType, setTimeType] = useState('lookback'); // 'lookback' | 'redshift'
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const galaxies = Array.from({length: 30}, (_, i) => ({
        id: i + 1,
        name: `Auriga ${i + 1}`,
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
        <div className="min-h-screen pt-24 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl">Select Auriga Galaxy</h2>
                    <p className="text-2xl text-white/90 drop-shadow-lg">Choose From 30 Different Galaxy Simulations</p>
                </div>
                
                {/* Galaxy Grid */}
                <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {galaxies.map((galaxy) => (
                        <button
                            key={galaxy.id}
                            onClick={() => handleGalaxySelect(galaxy)}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 border border-white/30 group cursor-pointer transform
                                     hover:scale-95 hover:bg-white/25 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50
                                     active:scale-90 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                            <div className="text-6xl mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">🌌</div>
                            <div className="text-white font-bold text-xl mb-2 drop-shadow-lg">{galaxy.name}</div>
                            <div className="text-sm text-white/80 mb-1 drop-shadow-sm">{galaxy.mass}</div>
                            <div className="text-sm text-white/70 drop-shadow-sm">{galaxy.subhalos} subhalos</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderViewModeSelection = () => (
        <div className="min-h-screen pt-24 pb-12 px-8 flex items-center justify-center">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">Choose View Mode</h2>
                    <p className="text-xl text-white/90 drop-shadow-lg bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
                        Selected: <span className="text-blue-400 font-semibold">{selectedGalaxy.name}</span>
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <button
                        onClick={() => handleViewModeSelect('isolated')}
                        className="bg-black/60 backdrop-blur-lg hover:bg-purple-900/60 p-12 rounded-2xl transition-all duration-300 border-2 border-white/30 hover:border-purple-400 text-left transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group"
                    >
                        <div className="text-6xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">🔍</div>
                        <h3 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-lg">Isolated View</h3>
                        <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">Focus on individual subhalos in isolation. Perfect for detailed analysis of specific structures and their evolution.</p>
                    </button>
                    
                    <button
                        onClick={() => handleViewModeSelect('whole')}
                        className="bg-black/60 backdrop-blur-lg hover:bg-green-900/60 p-12 rounded-2xl transition-all duration-300 border-2 border-white/30 hover:border-green-400 text-left transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 group"
                    >
                        <div className="text-6xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">🌌</div>
                        <h3 className="text-3xl font-bold text-green-400 mb-6 drop-shadow-lg">Whole View</h3>
                        <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">See the complete galaxy with all subhalos interacting. Ideal for understanding large-scale structure formation.</p>
                    </button>
                </div>
                
                <div className="text-center">
                    <button 
                        onClick={() => setStep('galaxy')}
                        className="bg-black/60 backdrop-blur-lg hover:bg-white/20 px-8 py-4 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/60 text-white font-semibold text-lg drop-shadow-lg"
                    >
                        ← Back to Galaxy Selection
                    </button>
                </div>
            </div>
        </div>
    );

    const renderSubhaloSelection = () => {
        const subhalos = Array.from({length: selectedGalaxy.subhalos}, (_, i) => ({
            id: i,
            mass: `${(Math.random() * 2 + 0.1).toFixed(2)} × 10¹⁰ M☉`,
            distance: `${(Math.random() * 100 + 10).toFixed(0)} kpc`
        }));

        return (
            <div className="min-h-screen pt-24 pb-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">Select Subhalo</h2>
                        <p className="text-xl text-white/90 drop-shadow-lg bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
                            {selectedGalaxy.name} - <span className="text-purple-400 font-semibold">Isolated View</span>
                        </p>
                    </div>
                    
                    <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30 mb-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-96 overflow-y-auto">
                            {subhalos.map((subhalo) => (
                                <button
                                    key={subhalo.id}
                                    onClick={() => {
                                        setSelectedSubhalo(subhalo);
                                        setStep('settings');
                                    }}
                                    className="bg-white/10 hover:bg-yellow-600/40 p-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-yellow-400 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 group"
                                >
                                    <div className="text-2xl mb-2 transition-all duration-300 group-hover:scale-110">⭐</div>
                                    <div className="text-white font-semibold text-sm drop-shadow-sm">Subhalo {subhalo.id}</div>
                                    <div className="text-xs text-white/80 drop-shadow-sm">{subhalo.mass}</div>
                                    <div className="text-xs text-white/70 drop-shadow-sm">{subhalo.distance}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button 
                            onClick={() => setStep('viewMode')}
                            className="bg-black/60 backdrop-blur-lg hover:bg-white/20 px-8 py-4 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/60 text-white font-semibold text-lg drop-shadow-lg"
                        >
                            ← Back to View Mode
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderSettings = () => (
        <div className="min-h-screen pt-24 pb-12 px-8 flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">Simulation Settings</h2>
                    <p className="text-xl text-white/90 drop-shadow-lg bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
                        {selectedGalaxy.name} - <span className="text-cyan-400 font-semibold">
                            {viewMode === 'isolated' ? `Subhalo ${selectedSubhalo?.id} (Isolated)` : 'Whole Galaxy'}
                        </span>
                    </p>
                </div>
                
                <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30 mb-8 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-blue-400 mb-6 drop-shadow-lg">Time Range</h3>

                    {/* Toggle */}
                    <div className="flex rounded-xl overflow-hidden border border-white/30 mb-8">
                        <button
                            onClick={() => { setTimeType('lookback'); setStartTime(''); setEndTime(''); }}
                            className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${timeType === 'lookback' ? 'bg-blue-600 text-white' : 'bg-black/40 text-white/60 hover:text-white'}`}
                        >
                            Lookback Time
                        </button>
                        <button
                            onClick={() => { setTimeType('redshift'); setStartTime(''); setEndTime(''); }}
                            className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${timeType === 'redshift' ? 'bg-blue-600 text-white' : 'bg-black/40 text-white/60 hover:text-white'}`}
                        >
                            Redshift
                        </button>
                    </div>

                    {/* Start / End inputs */}
                    <div className="flex gap-8 w-full max-w-md">
                        <div className="flex flex-col items-center flex-1 gap-2">
                            <label className="text-white font-semibold text-sm drop-shadow-sm">
                                Start {timeType === 'lookback' ? '(Gyr)' : '(z)'}
                            </label>
                            <input
                                type="number"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                min={0}
                                max={timeType === 'lookback' ? 13.8 : 20}
                                step={timeType === 'lookback' ? 0.1 : 0.01}
                                placeholder={timeType === 'lookback' ? '0.0' : '0.00'}
                                className="w-full bg-black/40 text-white text-center border border-white/30 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-white/30"
                            />
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-2">
                            <label className="text-white font-semibold text-sm drop-shadow-sm">
                                End {timeType === 'lookback' ? '(Gyr)' : '(z)'}
                            </label>
                            <input
                                type="number"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                min={0}
                                max={timeType === 'lookback' ? 13.8 : 20}
                                step={timeType === 'lookback' ? 0.1 : 0.01}
                                placeholder={timeType === 'lookback' ? '13.8' : '20.00'}
                                className="w-full bg-black/40 text-white text-center border border-white/30 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-white/30"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <button 
                        onClick={() => setStep(viewMode === 'isolated' ? 'subhalo' : 'viewMode')}
                        className="bg-black/60 backdrop-blur-lg hover:bg-white/20 px-8 py-4 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/60 text-white font-semibold text-lg drop-shadow-lg"
                    >
                        ← Back
                    </button>
                    
                    <SimulateButton
                        galaxy={selectedGalaxy}
                        viewMode={viewMode}
                        subhalo={selectedSubhalo}
                        timeType={timeType}
                        startTime={startTime}
                        endTime={endTime}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen">
            <BackgroundVideo />
            
            <div className="relative z-10">
                {step === 'galaxy' && renderGalaxySelection()}
                {step === 'viewMode' && renderViewModeSelection()}
                {step === 'subhalo' && renderSubhaloSelection()}
                {step === 'settings' && renderSettings()}
            </div>
        </div>
    );
}