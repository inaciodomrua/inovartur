
import React from 'react';
import BenefitItem from './BenefitItem';

interface AboutInovarTurProps {
  isMobile: boolean;
}

const AboutInovarTur = ({ isMobile }: AboutInovarTurProps) => {
  return (
    <div className="fade-in-section reveal-delay-1 order-2 md:order-1">
      <h2 className={`section-title ${isMobile ? 'mx-auto text-center' : ''}`}>Sobre a INOVAR TUR</h2>
      <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">
        A INOVAR TUR é proprietária de vários quartos dentro do Hotel PortoBello Park, em Porto Seguro, Bahia.
      </p>
      <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">
        E por aqui, você pode ter acesso direto com nós sem intermediários, sem precisar pagar mais caro.
      </p>
      <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">
        Trabalhamos para proporcionar as melhores experiências aos nossos clientes, com serviços de qualidade e preços mais acessíveis
      </p>
      <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">
        Nossa missão é inovar constantemente, oferecendo um atendimento personalizado e serviços que garantam a satisfação total do cliente durante sua estadia em Porto Seguro, Bahia.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
        <BenefitItem color="sunny" text="Direto com o proprietário" />
        <BenefitItem color="turquoise" text="Suporte todo dia" />
        <BenefitItem color="coral" text="Preço acessível" />
        <BenefitItem color="vibrantorange" text="Sem burocracia" />
      </div>
    </div>
  );
};

export default AboutInovarTur;
