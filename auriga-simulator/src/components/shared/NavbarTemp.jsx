import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-black text-white px-6 py-6 shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center pr-4">
        {/* Logo or App Name */}
        <h1 className="text-xl font-bold">AuGa VS</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium pr-6">
          <li>
            <Link 
              to="/" 
              className={`hover:text-gray-300 transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-400 animate-pulse font-semibold' 
                  : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/visualize" 
              className={`hover:text-gray-300 transition-colors duration-200 ${
                isActive('/visualize') 
                  ? 'text-blue-400 animate-pulse font-semibold' 
                  : ''
              }`}
            >
              Visualize
            </Link>
          </li>
          <li>
            <Link 
              to="/auriga" 
              className={`hover:text-gray-300 transition-colors duration-200 ${
                isActive('/auriga') 
                  ? 'text-blue-400 animate-pulse font-semibold' 
                  : ''
              }`}
            >
              Auriga
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`hover:text-gray-300 transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-blue-400 animate-pulse font-semibold' 
                  : ''
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}