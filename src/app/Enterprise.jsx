'use client';
import React, { useState } from 'react';
import { Building2, MessageCircle, Mail, X } from 'lucide-react';

const Enterprise = () => {
    const [showContactOptions, setShowContactOptions] = useState(false);

    const handleWhatsAppContact = () => {
        // Substitua pelo seu número de WhatsApp
        const phoneNumber = "5512991806648"; // Formato: código do país + número
        const message = encodeURIComponent("Olá! Sou uma empresa interessada nos seus serviços de recrutamento.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleEmailContact = () => {
        // Substitua pelo seu email
        const email = "contato@empresa.com";
        const subject = encodeURIComponent("Contato Empresarial - Serviços de Recrutamento");
        const body = encodeURIComponent("Olá!\n\nSou uma empresa interessada nos seus serviços de recrutamento e gostaria de obter mais informações.\n\nAguardo retorno.\n\nAtenciosamente,");
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}.com&su=${subject}&body=${body}`);
    };

    return (
        <section id='enterprise' className='py-16 text-left bg-white'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img
                            src="https://ec.europa.eu/eurostat/documents/4187653/15725031/Stockbym_AdobeStock_593476711_RV.jpg"
                            alt="Profissionais trabalhando"
                            className="rounded-lg shadow-xl max-w-full h-auto"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-indigo-950">Área empresarial</h2>
                        <div className="bg-white p-6">
                            <h3 className="text-xl font-semibold text-indigo-950 mb-2">Empresas</h3>
                            <p className="text-gray-600 mb-8">
                                Entre em contato e mude o futuro do seu negócio.
                            </p>
                            
                            {!showContactOptions ? (
                                <button
                                    onClick={() => setShowContactOptions(true)}
                                    className="flex py-2 px-4 w-80 items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Building2 size={24}/>
                                    Entrar em contato como empresa
                                </button>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-lg font-semibold text-indigo-950">
                                            Escolha como entrar em contato:
                                        </h4>
                                        <button
                                            onClick={() => setShowContactOptions(false)}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {/* Botão WhatsApp */}
                                        <button
                                            onClick={handleWhatsAppContact}
                                            className="flex w-80 py-3 px-4 items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                            <MessageCircle size={24}/>
                                            <div className="text-left">
                                                <div className="text-sm font-bold">WhatsApp</div>
                                                <div className="text-xs opacity-90">Contato direto e rápido</div>
                                            </div>
                                        </button>

                                        {/* Botão Email */}
                                        <button
                                            onClick={handleEmailContact}
                                            className="flex w-80 py-3 px-4 items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        >
                                            <Mail size={24}/>
                                            <div className="text-left">
                                                <div className="text-sm font-bold">E-mail</div>
                                                <div className="text-xs opacity-90">Contato formal e detalhado</div>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-600 text-center">
                                            💡 <strong>Dica:</strong> Para um atendimento mais rápido, use o WhatsApp. 
                                            Para propostas detalhadas, prefira o e-mail.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;
