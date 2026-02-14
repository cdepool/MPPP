
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor Improved */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-[120px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-green-100/30 to-blue-100/30 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-blue-700 bg-blue-50/50 backdrop-blur-md rounded-full border border-blue-100/50 uppercase">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-ping"></span>
              Venezuela Unida
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Tu Voz Construye el <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Regreso a la Democracia</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
              Ni enemigos ni bandos. Solo venezolanos recuperando salario, libertad y Constitución. Únete al Movimiento por la Participación Popular.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#unete"
                className="px-10 py-5 bg-yellow-400 hover:bg-yellow-300 text-blue-950 text-lg font-black rounded-2xl shadow-xl shadow-yellow-500/20 transition-all hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center group"
              >
                QUIERO SER VOLUNTARIO
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pilares"
                className="px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all text-center flex items-center justify-center"
              >
                CONOCER MÁS
              </a>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <img
                    key={i}
                    className="h-12 w-12 rounded-full border-4 border-white shadow-sm object-cover"
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}`}
                    alt="Voluntario"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800">
                  +4,200 venezolanos ya se sumaron
                </p>
                <p className="text-xs text-slate-500 font-medium italic">Presentes en los 24 estados del país</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 p-4 bg-white/40 backdrop-blur-[20px] rounded-[40px] border border-white/40 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-700 group hover:scale-[1.02]">
              <div className="rounded-[32px] overflow-hidden shadow-inner aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
                  alt="Equipo MPPP trabajando"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Floating Glassmorphism Cards */}
            <div className="absolute -right-8 top-1/4 z-20 hidden xl:block animate-bounce-slow">
              <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-xl text-2xl">🗳️</div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Defensa del Voto</p>
                  <p className="text-sm font-black text-slate-900">Auditoría Real</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-12 bottom-1/4 z-20 hidden xl:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-xl text-2xl">🤝</div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Unidad Nacional</p>
                  <p className="text-sm font-black text-slate-900">Sin Polarización</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
