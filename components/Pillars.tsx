
import React from 'react';

const pillars = [
  {
    icon: '🕊️',
    title: 'Reconciliación Real',
    desc: 'El que piensa diferente no es tu enemigo, es tu compañero de reconstrucción.',
    color: 'bg-blue-50'
  },
  {
    icon: '⚖️',
    title: 'Justicia sin Persecución',
    desc: 'Libertad inmediata para presos políticos. Fin al terrorismo judicial.',
    color: 'bg-green-50'
  },
  {
    icon: '💰',
    title: 'Salario Digno',
    desc: 'Lucha técnica y gremial por sueldos que cubran necesidades reales.',
    color: 'bg-yellow-50'
  },
  {
    icon: '🗳️',
    title: 'Democracia Participativa',
    desc: 'El voto como conquista del poder popular, no como trampa.',
    color: 'bg-indigo-50'
  }
];

const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">IDENTIDAD COLECTIVA</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          ¿Sientes que la Política te Dejó Atrás?
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          El MPPP es tu atril. Aquí no importa si votaste rojo o azul. Importa tu aporte para fortalecer la economía, rescatar la Constitución y devolver la dignidad al trabajo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl ${pillar.color} border border-transparent hover:border-blue-100 transition-all hover:shadow-xl group text-left`}
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h4>
              <p className="text-gray-600 leading-relaxed">
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
