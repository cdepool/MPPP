
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold tracking-tighter text-blue-600">
              MPPP
            </span>
            <span className="hidden sm:block ml-3 text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Participación Popular
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pilares" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Nosotros</a>
            <a href="#diferenciadores" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Propuesta</a>
            <a 
              href="#unete" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              SER VOLUNTARIO
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#pilares" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Nosotros</a>
          <a href="#diferenciadores" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium">Propuesta</a>
          <a 
            href="#unete" 
            onClick={() => setIsOpen(false)} 
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold"
          >
            SER VOLUNTARIO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
