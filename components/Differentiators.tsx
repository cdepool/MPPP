
import React from 'react';

const items = [
  { text: "NO somos una estructura partidista tradicional", icon: "🚫" },
  { text: "NO excluimos a nadie por su historia política", icon: "🤝" },
  { text: "NO buscamos venganza, buscamos justicia", icon: "⚖️" },
  { text: "NO prometemos magia, proponemos trabajo técnico", icon: "🛠️" }
];

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciadores" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              Claridad y Transparencia: <br className="hidden sm:block" />
              <span className="text-blue-600">Lo que NO Somos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              La confianza se construye con honestidad. El MPPP nace para romper los vicios de la vieja política y proponer un camino nuevo donde todos quepan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-gray-700 text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-green-50 p-12 rounded-3xl border border-blue-100 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-2xl font-extrabold text-blue-900 mb-4">Nuestro Diferenciador Crítico</h4>
              <p className="text-blue-800/80 mb-6 leading-relaxed">
                "Un espacio de participación real donde tu aporte técnico, gremial o comunitario vale más que tu pasado político."
              </p>
              <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"></div>
                </div>
                <span className="text-sm font-bold text-blue-900">Pluralismo Incluyente</span>
              </div>
            </div>
            
            {/* Design elements */}
            <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-48 h-48 fill-current text-blue-900" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
