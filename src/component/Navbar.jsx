import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/caps.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#How-it-works' },
    { name: 'Our Story', href: '#Our-Story' },
    { name: 'FAQs', href: '#Faqs' },
  ];

  return (
    <nav className="bg-[#24126a] text-white shadow-lg py-4">
      <div className="max-w-6xl mx-auto px-6 xl:px-11">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-2 text-xl font-semibold">Launch For fun</span>
          </div>

          {/* Desktop Navigation - pushed to left */}
          <div className="hidden md:flex space-x-6 mr-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#3e80ff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button - white color */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#3e80ff] focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Card style */}
        {isOpen && (
          <div className="md:hidden transition-all duration-300 ease-in-out transform">
            <div className="bg-white text-[#24126a] rounded-lg shadow-md mx-2 mt-4 py-3 px-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#3e80ff] block pl-2 py-2 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;