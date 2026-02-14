
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black tracking-tight mb-8">
              <span className="text-blue-500 font-black">MPP</span>
              <span className="text-slate-500 ml-2">VENEZUELA</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-sm mb-10 font-medium leading-relaxed">
              Movimiento por la Participación Popular. Construyendo el futuro de Venezuela desde la base y el compromiso ciudadano.
            </p>
            <div className="flex space-x-6">
              {[1, 2, 3].map(i => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1 border border-white/5">
                  <div className="w-6 h-6 bg-slate-400 mask-center"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-xs">Propuesta</h4>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Estatutos Sociales</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Plan de Emergencia</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Defensa del Voto</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-xs">Enlace Directo</h4>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📍</span>
                <span>Caracas, Venezuela</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📧</span>
                <span>unete@mpp.org.ve</span>
              </li>
              <li className="flex items-center space-x-3 font-bold text-white">
                <span className="text-emerald-500">💬</span>
                <span>Comunidad WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-8">
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-white/5 rounded-full font-black text-[10px] tracking-widest uppercase">Democracia Real</span>
            <span className="px-3 py-1 bg-white/5 rounded-full font-black text-[10px] tracking-widest uppercase">Participación</span>
          </div>
          <p className="font-medium italic">© 2024 MPP Venezuela. La esperanza se organiza.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
