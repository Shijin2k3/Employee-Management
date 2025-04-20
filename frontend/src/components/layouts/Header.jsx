import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const handleLinkClick = (link) => {
        setActiveLink(link);
      };

    return (
      <nav className="bg-blue-950 p-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">EMS</div>
          <div className="hidden md:flex space-x-4 gap-6">
            <a href="#"  
            onClick={() => handleLinkClick('home')}
            className={`text-white ${activeLink === 'home' ? 'font-bold' : 'hover:text-gray-400'}`}
             >Home</a>
            <a href="#"  
            onClick={() => handleLinkClick('about')}
            className={`text-white ${activeLink === 'about' ? 'font-bold' : 'hover:text-gray-400'}`}
            >About</a>
            <a href="#"  onClick={() => handleLinkClick('login')}
            className={`text-white ${activeLink === 'login' ? 'font-bold' : 'hover:text-gray-400'}`}
             >Login</a>
            <a href="#"  onClick={() => handleLinkClick('employees')}
            className={`text-white ${activeLink === 'employees' ? 'font-bold' : 'hover:text-gray-400'}`}
             >Employees</a>
            <a href="#"  onClick={() => handleLinkClick('contact')}
            className={`text-white ${activeLink === 'contact' ? 'font-bold' : 'hover:text-gray-400'}`}
            >Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer">
              {isOpen ?<AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 text-center absolute left-0 right-0 top-full bg-blue-950 z-2">
            <Link to='/' className="block text-gray-300 hover:text-white py-3" onClick={toggleMenu}>Home</Link>
            <a href="#" className="block text-gray-300 hover:text-white py-3" onClick={toggleMenu}>About</a>
            <Link to='/login' className="block text-gray-300 hover:text-white py-3" onClick={toggleMenu}>Login</Link>
            <a href="#" className="block text-gray-300 hover:text-white py-3" onClick={toggleMenu}>Employees</a>
            <a href="#" className="block text-gray-300 hover:text-white py-3" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </nav>
    );
  
}
