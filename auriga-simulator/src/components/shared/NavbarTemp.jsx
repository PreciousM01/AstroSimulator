import { useState } from "react";
import { Link } from "react-router-dom"; // Only needed if routing is set up

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <h1 className="text-xl font-bold">AurigaSim</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/visualize" className="hover:text-gray-300">Visualize</Link></li>
          <li><Link to="/auriga" className="hover:text-gray-300">Auriga</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        </ul>

      </div>
    </nav>
  );
}
