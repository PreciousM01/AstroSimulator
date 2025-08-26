export default function ExampleVideos() {
    const examples = [
        {
            title: "Galaxy Merger",
            description: "Watch two massive galaxies collide and merge over billions of years",
            thumbnail: "🌌"
        },
        {
            title: "Subhalo Evolution",
            description: "Track dark matter subhalos as they orbit and interact",
            thumbnail: "⭐"
        },
        {
            title: "Stellar Formation",
            description: "Observe star formation regions lighting up across the galaxy",
            thumbnail: "✨"
        }
    ];

    return (
        <div>
            <h2 className="text-4xl font-bold text-white mb-8">Example Simulations</h2>
            <p className="text-lg text-gray-200 mb-8">
                Explore these sample videos to see what's possible with AuGa VS
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {examples.map((example, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer">
                        <div className="text-4xl mb-4 text-center">{example.thumbnail}</div>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{example.title}</h3>
                        <p className="text-gray-200 text-sm">{example.description}</p>
                    </div>
                ))}
            </div>
            
            <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all">
                    View All Examples
                </button>
            </div>
        </div>
    );
}