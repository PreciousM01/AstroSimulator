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
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/visualize" className="hover:text-gray-300">Visualize</a></li>
          <li><a href="/auriga" className="hover:text-gray-300">Auriga</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
        </ul>

      </div>
    </nav>
  );
}
