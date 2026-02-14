
import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-1 bg-gradient-to-tr from-blue-500 to-green-500 rounded-full mb-6">
            <img 
              src="https://picsum.photos/seed/william/200/200" 
              alt="William Pérez" 
              className="w-24 h-24 rounded-full border-4 border-gray-900 object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-blue-400">William Pérez</h3>
          <p className="text-gray-400 text-sm">Liderazgo del Movimiento</p>
        </div>

        <blockquote className="text-2xl sm:text-3xl font-medium italic leading-relaxed text-center text-gray-100">
          <span className="text-5xl text-blue-500 mr-2 opacity-50">"</span>
          Es necesario que Venezuela vuelva a esos principios constitucionales... Tenemos que salir a conquistar y enamorar a ese poder popular.
          <span className="text-5xl text-green-500 ml-2 opacity-50">"</span>
        </blockquote>
        
        <div className="mt-12 flex justify-center">
          <button className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all border border-white/10 group">
            <span className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-semibold text-sm">Ver mensaje completo (45s)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
