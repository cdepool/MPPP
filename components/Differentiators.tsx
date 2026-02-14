
import React from 'react';

const items = [
  { text: "NO somos una estructura partidista tradicional", icon: "🚫" },
  { text: "NO excluimos a nadie por su pasado político", icon: "🤝" },
  { text: "NO buscamos revanchismo, buscamos justicia", icon: "⚖️" },
  { text: "NO prometemos magia, ofrecemos trabajo técnico", icon: "🛠️" }
];

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciadores" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100 uppercase">
              Valores Éticos
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Claridad y Transparencia: <br className="hidden sm:block" />
              <span className="text-blue-600">Lo que NO somos</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
              La confianza se construye con honestidad radical. El MPP nace para romper los vicios de la vieja política y proponer un camino donde el mérito valga más que el carnet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-bold text-slate-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 lg:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-1 bg-yellow-400 rounded-full mb-8"></div>
                <h4 className="text-3xl font-black text-white mb-6 tracking-tight">Nuestro Diferenciador Crítico</h4>
                <p className="text-blue-50 text-xl mb-10 leading-relaxed font-medium">
                  "Un espacio de participación ciudadana real donde tu aporte técnico, gremial o comunitario vale más que tu pasado político."
                </p>
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 inline-flex">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-indigo-600 shadow-sm flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-green-400' : 'bg-yellow-400'}`}>
                        {i === 1 ? 'A' : i === 2 ? 'B' : 'C'}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-black text-white uppercase tracking-widest">Pluralismo Incluyente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
