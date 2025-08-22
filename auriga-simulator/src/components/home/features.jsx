import { useState } from 'react';

export default function Features() {
    const [currentFeature, setCurrentFeature] = useState(0);
    
    const features = [
        {
            title: "Galaxy Simulation",
            description: "Experience the evolution of entire galaxies with scientifically accurate simulations based on the Auriga project.",
            icon: "🌌"
        },
        {
            title: "Subhalo Tracking",
            description: "Follow individual dark matter subhalos as they merge, interact, and shape galactic structure over cosmic time.",
            icon: "🔍"
        },
        {
            title: "High-Resolution Rendering",
            description: "Generate stunning 4K videos with customizable camera angles, time scales, and visual effects.",
            icon: "🎬"
        },
        {
            title: "Interactive Controls",
            description: "Adjust simulation parameters, zoom levels, and viewing modes to create your perfect cosmic visualization.",
            icon: "🎮"
        }
    ];

    const nextFeature = () => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
    };

    const prevFeature = () => {
        setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-white mb-8">Key Features</h2>
            
            <div className="bg-white/10 rounded-lg p-8 mb-6">
                <div className="text-6xl mb-4">{features[currentFeature].icon}</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">{features[currentFeature].title}</h3>
                <p className="text-lg text-gray-200 leading-relaxed">{features[currentFeature].description}</p>
            </div>
            
            <div className="flex justify-between items-center">
                <button 
                    onClick={prevFeature}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                    ← Previous
                </button>
                
                <div className="flex space-x-2">
                    {features.map((_, index) => (
                        <div 
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentFeature ? 'bg-blue-400' : 'bg-white/30'
                            }`}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={nextFeature}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                    Next →
                </button>
            </div>
        </div>
    );
}