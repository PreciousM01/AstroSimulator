import { useState } from 'react';
import BackgroundVideo from '../components/shared/BackgroundVideo';

export default function AurigaPage() {
    const [selectedTab, setSelectedTab] = useState('overview');
    
    const tabs = [
        { id: 'overview', label: 'Overview', icon: '🌌' },
        { id: 'science', label: 'Science', icon: '🔬' },
        { id: 'data', label: 'Data', icon: '📊' },
        { id: 'publications', label: 'Publications', icon: '📚' }
    ];
    
    const renderContent = () => {
        switch(selectedTab) {
            case 'overview':
                return (
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Auriga Project Overview</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-200 leading-relaxed">
                                The Auriga Project represents one of the most comprehensive suites of galaxy formation simulations 
                                ever created. Using state-of-the-art computational techniques, we simulate the formation of 
                                Milky Way-like galaxies from the Big Bang to the present day.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-blue-600/20 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-blue-400 mb-3">High Resolution</h3>
                                    <p className="text-gray-200">Particle masses down to 10⁴ solar masses for unprecedented detail</p>
                                </div>
                                <div className="bg-green-600/20 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-green-400 mb-3">Full Physics</h3>
                                    <p className="text-gray-200">Including star formation, stellar feedback, and black hole physics</p>
                                </div>
                                <div className="bg-purple-600/20 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-purple-400 mb-3">Large Sample</h3>
                                    <p className="text-gray-200">31 different galaxy halos with diverse evolutionary histories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'science':
                return (
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Scientific Goals</h2>
                        <div className="space-y-6">
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Galaxy Formation</h3>
                                <p className="text-gray-200">Understanding how galaxies like our Milky Way form and evolve over cosmic time.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-red-400 mb-4">Dark Matter Structure</h3>
                                <p className="text-gray-200">Investigating the role of dark matter in shaping galactic architecture.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Stellar Populations</h3>
                                <p className="text-gray-200">Studying star formation histories and chemical evolution patterns.</p>
                            </div>
                        </div>
                    </div>
                );
            
            case 'data':
                return (
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Simulation Data</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical Specifications</h3>
                                <ul className="space-y-3 text-gray-200">
                                    <li>• Dark matter particles: ~10⁷ per halo</li>
                                    <li>• Gas cells: ~10⁷ per halo</li>
                                    <li>• Star particles: ~10⁶ per halo</li>
                                    <li>• Time resolution: ~5 Myr snapshots</li>
                                    <li>• Spatial resolution: ~100 pc</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-400 mb-4">Available Outputs</h3>
                                <ul className="space-y-3 text-gray-200">
                                    <li>• Particle positions and velocities</li>
                                    <li>• Gas properties (density, temperature)</li>
                                    <li>• Stellar ages and metallicities</li>
                                    <li>• Black hole masses and accretion rates</li>
                                    <li>• Subhalo catalogs and merger trees</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'publications':
                return (
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Key Publications</h2>
                        <div className="space-y-4">
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Grand et al. (2017)</h3>
                                <p className="text-gray-200 mb-2">"The Auriga Project: the properties and formation mechanisms of disc galaxies across cosmic time"</p>
                                <p className="text-sm text-gray-400">Monthly Notices of the Royal Astronomical Society</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Marinacci et al. (2014)</h3>
                                <p className="text-gray-200 mb-2">"The formation of disc galaxies in high-resolution moving-mesh cosmological simulations"</p>
                                <p className="text-sm text-gray-400">Monthly Notices of the Royal Astronomical Society</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">Pakmor et al. (2016)</h3>
                                <p className="text-gray-200 mb-2">"Improving the convergence properties of the moving-mesh code AREPO"</p>
                                <p className="text-sm text-gray-400">Monthly Notices of the Royal Astronomical Society</p>
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };
    
    return (
        <div className="relative min-h-screen">
            <BackgroundVideo />
            
            <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-start pt-8">
                <div className="w-[70%] ml-8">
                    <div className="bg-black/80 backdrop-blur-sm text-white rounded-xl shadow-2xl">
                        {/* Tab Navigation */}
                        <div className="flex border-b border-white/20">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedTab(tab.id)}
                                    className={`flex items-center px-6 py-4 font-semibold transition-colors ${
                                        selectedTab === tab.id 
                                            ? 'bg-blue-600/30 text-blue-400 border-b-2 border-blue-400' 
                                            : 'hover:bg-white/10 text-gray-300'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        
                        {/* Tab Content */}
                        <div className="p-8">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}