
import React from 'react';
import { Shield, Award } from 'lucide-react';

const CertificationSection = () => {
  return (
    <section className="bg-gradient-to-r from-turquoise/10 to-deepblue/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Certificate Image */}
          <div className="order-2 md:order-1 fade-in-section">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-coral rounded-full flex items-center justify-center opacity-90 shadow-lg z-10">
                <Award className="w-10 h-10 text-white" />
              </div>
              <img 
                src="/lovable-uploads/5828a3a2-b6bb-42fa-9c6e-24ee52d4afa6.png" 
                alt="Certificado Cadastur - Ministério do Turismo" 
                className="rounded-lg shadow-xl border-4 border-white w-full md:max-w-md mx-auto"
              />
            </div>
          </div>
          
          {/* Certificate Information */}
          <div className="order-1 md:order-2 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-deepblue mb-4 md:mb-6">
              Agência Oficialmente Credenciada
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-coral">
              <p className="text-lg mb-2 text-gray-800">
                A <span className="font-semibold">INOVAR TUR</span> é uma empresa 
                <span className="text-coral font-bold"> certificada pelo Ministério do Turismo </span> 
                através do Cadastur, garantindo aos nossos clientes:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <Shield className="text-turquoise mr-2 h-5 w-5 mt-1" />
                  <span>Segurança e garantia de qualidade em nossos serviços</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-turquoise mr-2 h-5 w-5 mt-1" />
                  <span>Reconhecimento oficial como prestadora de serviços turísticos</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-turquoise mr-2 h-5 w-5 mt-1" />
                  <span>Compromisso com as normas e regulamentos do setor</span>
                </li>
              </ul>
            </div>
            <div className="bg-deepblue/10 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-3 md:mb-0">
                  <p className="font-medium">Registro Cadastur:</p>
                  <p className="font-bold text-lg">58.471.625/0001-11</p>
                </div>
                <div>
                  <p className="font-medium">Validade:</p>
                  <p className="font-bold text-lg">16/12/2024 a 16/12/2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
