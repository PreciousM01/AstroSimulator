import { useState } from 'react';

export default function HowToStart() {
    const [currentStep, setCurrentStep] = useState(0);
    
    const steps = [
        {
            title: "Choose Your Galaxy",
            description: "Select from 31 different Auriga galaxies (0-30), each with unique properties and evolutionary histories.",
            action: "Browse available galaxies and pick your favorite"
        },
        {
            title: "Select View Mode",
            description: "Choose between Isolated view (focus on individual subhalos) or Whole view (complete galaxy interactions).",
            action: "Decide on your preferred visualization style"
        },
        {
            title: "Customize Settings",
            description: "Adjust time scales, camera angles, resolution, and visual effects to match your vision.",
            action: "Fine-tune your simulation parameters"
        },
        {
            title: "Generate & Download",
            description: "Let our system render your custom galaxy simulation and download the high-quality video.",
            action: "Create and save your cosmic masterpiece"
        }
    ];

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-white mb-8">How to Get Started</h2>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 mb-6">
                <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                        {currentStep + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400">{steps[currentStep].title}</h3>
                </div>
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">{steps[currentStep].description}</p>
                <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-green-300 font-semibold">✓ {steps[currentStep].action}</p>
                </div>
            </div>
            
            <div className="flex justify-between items-center">
                <button 
                    onClick={prevStep}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                    ← Previous Step
                </button>
                
                <div className="text-white/60">
                    Step {currentStep + 1} of {steps.length}
                </div>
                
                <button 
                    onClick={nextStep}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                    Next Step →
                </button>
            </div>
        </div>
    );
}