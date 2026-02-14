import React from 'react';

const PrivacyNotice: React.FC = () => {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-8">
            <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-bold text-blue-900 mb-1">Compromiso de Privacidad y Seguridad</h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                        Tus datos son manejados bajo estrictos protocolos de seguridad y confidencialidad. El MPP es una Asociación Civil legalmente constituida que garantiza que tu información será utilizada exclusivamente para la coordinación de actividades de voluntariado, protegiendo tu identidad en todo momento.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyNotice;
