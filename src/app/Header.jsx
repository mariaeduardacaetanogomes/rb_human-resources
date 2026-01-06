'use client';

import React, { useState } from 'react';
import { Copy, X, Mail } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    
    const companyEmail = "rbrecursoshumanos.tte@gmail.com";
    
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(companyEmail);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Erro ao copiar email:', err);
        }
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        setCopySuccess(false);
    };

    return (
        <>
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-16">
                        <Image
                        src="/logo_ofc-preview.png"
                        alt="Logo da empresa"
                        width={70}
                        height={70}
                    />
                        <ul className="hidden md:flex space-x-8 gap-16">
                            <li>
                                <a href="#herosection" className="text-gray-700 hover:text-gray-900 font-medium">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#descriptionsection" className="text-gray-700 hover:text-gray-900 font-medium">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="#enterprise" className="text-blue-700 hover:text-blue-900 font-medium">
                                    Sou uma empresa
                                </a>
                            </li>
                            <li>
                                <a href="#candidate" className="text-yellow-600 hover:text-yellow-700 font-medium">
                                    Sou um candidato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button 
                        onClick={togglePopup}
                        className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 font-medium transition-colors duration-200"
                    >
                        Contato
                    </button>
                </nav>
            </header>

            {/* Overlay do Pop-up */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                        {/* Header do Pop-up */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <Mail className="text-yellow-600" size={24} />
                                <h2 className="text-xl font-semibold text-gray-900">Entre em Contato</h2>
                            </div>
                            <button
                                onClick={togglePopup}
                                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Conteúdo do Pop-up */}
                        <div className="p-6">
                            <p className="text-gray-700 mb-6 text-center">
                                Entre em contato conosco através do nosso email oficial. 
                                Clique no botão abaixo para copiar o endereço.
                            </p>

                            {/* Email Display */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-medium text-lg">
                                        {companyEmail}
                                    </span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                                            copySuccess 
                                                ? 'bg-green-100 text-green-700 border border-green-300' 
                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300'
                                        }`}
                                    >
                                        <Copy size={16} />
                                        {copySuccess ? 'Copiado!' : 'Copiar'}
                                    </button>
                                </div>
                            </div>

                            {/* Mensagem de sucesso */}
                            {copySuccess && (
                                <div className="text-center text-green-600 text-sm mb-4">
                                    ✓ Email copiado para a área de transferência!
                                </div>
                            )}

                            {/* Botão de fechar */}
                            <div className="flex justify-center">
                                <button
                                    onClick={togglePopup}
                                    className="bg-yellow-600 text-white px-8 py-2 rounded-md hover:bg-yellow-700 font-medium transition-colors duration-200"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;