import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-white mb-6">
        Welcome to <span className="text-blue-400">AuGa VS</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
        Create stunning video simulations of the Auriga Galaxies. Explore cosmic evolution, 
        visualize galactic structures, and share your discoveries with the world.
      </p>
      <div className="flex space-x-4">
        <Link to="/visualize">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
          Start Exploring
        </button>
        </Link>
        <a href="#features">
            <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
          Learn More
        </button>
        </a>
      </div>
    </div>
  );
}
