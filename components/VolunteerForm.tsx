
import React, { useState } from 'react';
import { generateWelcomeMessage } from '../services/geminiService';

const areas = [
  "Economía y finanzas",
  "Organización comunitaria",
  "Comunicación y redes sociales",
  "Defensa del voto y auditoría electoral",
  "Gremios y sindicatos",
  "Derechos humanos"
];

const states = [
  "Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", 
  "Delta Amacuro", "Distrito Capital", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", 
  "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", 
  "Yaracuy", "Zulia"
];

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    state: '',
    area: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiMessage, setAiMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Call Gemini to get a personalized response
    const msg = await generateWelcomeMessage(formData.name, formData.area);
    setAiMessage(msg || '');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="unete" className="py-24 bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold mb-6">¡Gracias por sumarte!</h2>
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm mb-8 text-left">
            <p className="text-xl italic leading-relaxed">
              "{aiMessage}"
            </p>
          </div>
          <p className="text-blue-100 mb-8">
            Nuestro equipo de coordinación regional te contactará por WhatsApp en las próximas 48 horas.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-white underline font-bold"
          >
            Volver a la página principal
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="unete" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 p-12 lg:p-16 bg-blue-600 text-white flex flex-col justify-center">
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">
              Toma tu Lugar en la Historia de la Reconstrucción
            </h3>
            <p className="text-blue-100 text-lg mb-10">
              Cada venezolano que se suma aporta una pieza clave para restaurar nuestra dignidad nacional. No somos un partido más, somos el frente amplio de la gente.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-lg">🛡️</div>
                <div>
                  <h4 className="font-bold">Datos Protegidos</h4>
                  <p className="text-sm text-blue-100">Seguridad según normativa venezolana.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-lg">⚡</div>
                <div>
                  <h4 className="font-bold">Activación Rápida</h4>
                  <p className="text-sm text-blue-100">Asignación técnica según tu perfil.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-blue-500/30">
              <p className="text-2xl font-bold italic opacity-80">"El futuro no se espera, se organiza."</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    placeholder="+58 412..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Estado</label>
                <select 
                  required
                  value={formData.state}
                  onChange={e => setFormData({...formData, state: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzZCNzI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE5IDlsLTcgNy03LTciLz48L3N2Zz4=')]"
                >
                  <option value="">Selecciona tu estado</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">¿En qué área puedes aportar?</label>
                <select 
                  required
                  value={formData.area}
                  onChange={e => setFormData({...formData, area: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzZCNzI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE5IDlsLTcgNy03LTciLz48L3N2Zz4=')]"
                >
                  <option value="">Elige tu área de aporte</option>
                  {areas.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-extrabold rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-blue-900" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>PROCESANDO...</span>
                  </>
                ) : (
                  <span>SUMAR MI APORTE AL MOVIMIENTO</span>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-400">
                Asociación Civil sin fines de lucro. Tus datos están protegidos según normativa venezolana.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
