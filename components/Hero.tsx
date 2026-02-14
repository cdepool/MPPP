
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100 animate-pulse">
              VENEZUELA UNIDA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Tu Voz Construye el Camino de <span className="text-blue-600">Regreso a la Democracia</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Ni enemigos ni bandos. Solo venezolanos recuperando salario, libertad y Constitución. Únete al Movimiento por la Participación Popular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#unete" 
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 text-lg font-extrabold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 text-center"
              >
                QUIERO SER VOLUNTARIO
              </a>
              <a 
                href="#pilares" 
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all text-center"
              >
                CONOCER MÁS
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-4 grayscale opacity-70">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="h-10 w-10 rounded-full border-2 border-white" 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="Voluntario" 
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-500">
                +4,200 venezolanos ya se sumaron
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-8 border-white">
              <img 
                src="https://picsum.photos/seed/mppp-main/800/1000" 
                alt="Venezolanos en diálogo" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 bg-green-100 rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -right-6 h-48 w-48 bg-blue-100 rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;
