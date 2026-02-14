
import React from 'react';

const pillars = [
  {
    icon: '🤝',
    title: 'Reconciliación Real',
    desc: 'Unimos a quienes piensan diferente. La reconstrucción de Venezuela no admite exclusiones, solo compromiso ciudadano.',
    color: 'from-blue-500/10 to-indigo-500/10',
    iconBg: 'bg-blue-100 text-blue-600'
  },
  {
    icon: '⚖️',
    title: 'Instituciones Fuertes',
    desc: 'Buscamos el fin del ventajismo judicial y la libertad plena de los presos políticos. Restaurar el Estado de Derecho es prioridad.',
    color: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: '📈',
    title: 'Economía con Propósito',
    desc: 'Luchamos por salarios técnicos que derroten la inflación. Queremos que el trabajo en Venezuela vuelva a significar prosperidad.',
    color: 'from-amber-500/10 to-orange-500/10',
    iconBg: 'bg-amber-100 text-amber-600'
  },
  {
    icon: '🗳️',
    title: 'Poder Ciudadano',
    desc: 'El voto es nuestra herramienta de cambio. Organizamos la participación popular para que cada voluntad cuente y se respete.',
    color: 'from-indigo-500/10 to-purple-500/10',
    iconBg: 'bg-indigo-100 text-indigo-600'
  }
];

const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 bg-blue-50 rounded-full border border-blue-100 uppercase">
          Nuestra Identidad
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">
          ¿Sientes que la política te dejó atrás?
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-20 font-medium">
          El MPPP es tu espacio. Aquí no importa si votaste rojo o azul. Importa tu aporte para rescatar la Constitución y devolver la dignidad al trabajo venezolano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-[32px] bg-white border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group text-left overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`w-14 h-14 ${pillar.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shadow-black/5`}>
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
