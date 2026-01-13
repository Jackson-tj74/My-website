
import { useState } from "react";
import { Link } from "react-router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          
          
          <h1 className="text-2xl font-bold tracking-wide">
            MyWebsite
          </h1>

        
          <div className="hidden md:flex space-x-8 font-medium">
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
            
            

             <Link
              to="/AboutMe"
              className="hover:text-yellow-300 transition duration-300"
            >
              AboutMe
            </Link>

            <Link
              to="/Infor"
              className="hover:text-yellow-300 transition duration-300"
            >
              Info
            </Link>

            <Link
              to="/Blog"
              className="hover:text-yellow-300 transition duration-300"
            >
              Blog
            </Link>

            
            
          </div>

          
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-700 text-white px-6 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-300 transition"
            >
              Home
            </Link>
            
            

            <Link
              to="/AboutMe"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-300 transition"
            >
              AboutMe
            </Link>

            <Link
              to="/Infor"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-300 transition"
            >
              Info
            </Link>

            <Link
              to="/Blog"
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-300 transition"
            >
              Blog
            </Link>

          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
