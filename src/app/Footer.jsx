import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-xl font-bold mb-4">RB Recursos Humanos</h3>
                        <p className="text-gray-400">
                            Conectando talentos e empresas para garantir serviços de qualidade.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold pb-2">Links Úteis</h4>
                        <ul className="list-none">
                            <li className="pb-2"><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-300">Sobre nós</a></li>
                            <li className="pb-2"><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-300">Vagas</a></li>
                            <li className="pb-2"><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-300">Serviços</a></li>
                            <li className="pb-8"><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors duration-300">Contato</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold pb-2">Contato</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center text-gray-400">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>(12)991806648</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>contato@rbrecursoshumanos.com.br</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Taubaté, SP</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 RB Recursos Humanos. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;