import BackgroundVideo from '../components/shared/BackgroundVideo';

export default function AboutPage() {
    return (
        <div className="relative min-h-screen">
            <BackgroundVideo />
            
            <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">
                <div className="w-[70%] ml-8">
                    <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl">
                        <h1 className="text-5xl font-bold text-white mb-8">About AurigaSim</h1>
                        
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-blue-400 mb-4">The Auriga Project</h2>
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    The Auriga Project is a suite of high-resolution cosmological zoom-in simulations of Milky Way-mass galaxies. 
                                    These simulations track the formation and evolution of galaxies from the early universe to the present day, 
                                    providing unprecedented insights into galactic structure and dynamics.
                                </p>
                            </section>
                            
                            <section>
                                <h2 className="text-3xl font-bold text-green-400 mb-4">Our Mission</h2>
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    AurigaSim makes cutting-edge astrophysical simulations accessible to everyone. We transform complex 
                                    scientific data into stunning visualizations that help researchers, educators, and enthusiasts 
                                    explore the cosmos like never before.
                                </p>
                            </section>
                            
                            <section>
                                <h2 className="text-3xl font-bold text-purple-400 mb-4">Technical Specifications</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-bold text-white mb-2">Resolution</h3>
                                        <p className="text-gray-300">Up to 4K (3840×2160) video output</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-bold text-white mb-2">Galaxies</h3>
                                        <p className="text-gray-300">31 unique Auriga simulations</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-bold text-white mb-2">Time Range</h3>
                                        <p className="text-gray-300">13.8 billion years of evolution</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-bold text-white mb-2">Particle Count</h3>
                                        <p className="text-gray-300">Millions of dark matter particles</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}