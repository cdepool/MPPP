import React, { useEffect } from 'react';
import PrivacyNotice from './PrivacyNotice';

const VolunteerForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://vip.lanextpodcast.live/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="unete" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[40px] shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-blue-600 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/50 to-indigo-800/50"></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black mb-8 leading-[1.1] tracking-tight">
                Toma tu lugar en la historia de la reconstrucción
              </h3>
              <p className="text-blue-50 text-xl mb-12 font-medium opacity-90 leading-relaxed">
                Cada venezolano que se suma aporta una pieza clave para restaurar nuestra dignidad nacional. Únete al esfuerzo colectivo.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-5">
                  <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/10">🛡️</div>
                  <div>
                    <h4 className="font-black text-lg mb-1 tracking-tight">Datos Blindados</h4>
                    <p className="text-blue-100 font-medium">Protocolos de seguridad de alto nivel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/10">⚡</div>
                  <div>
                    <h4 className="font-black text-lg mb-1 tracking-tight">Impacto Inmediato</h4>
                    <p className="text-blue-100 font-medium">Activación rápida tras tu registro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center bg-white min-h-[600px]">
            <div className="w-full h-full min-h-[500px]">
              <iframe
                src="https://vip.lanextpodcast.live/widget/form/UYoSc90Qn2pTLt0No5Ph"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-UYoSc90Qn2pTLt0No5Ph"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="MPP"
                data-height="493"
                data-layout-iframe-id="inline-UYoSc90Qn2pTLt0No5Ph"
                data-form-id="UYoSc90Qn2pTLt0No5Ph"
                title="MPP"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <PrivacyNotice />
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
