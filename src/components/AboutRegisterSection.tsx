'use client';


const AboutRegisterSection = () => {
  



  return (
    <div className="bg-[#EDE0D4] py-16 mt-16" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-4">Acerca del Desafío</h2>
            <p className="text-[#264653] mb-4">
              El NASA Space Apps Challenge es un hackathon internacional para programadores, científicos, diseñadores, narradores, creadores, tecnólogos y más, donde los equipos usan datos abiertos de la NASA para resolver problemas reales en la Tierra y el espacio.
            </p>
            <p className="text-[#264653]">
              Únete a un fin de semana de innovación, colaboración y resolución de problemas enfrentando algunos de los desafíos más urgentes en la exploración espacial y la ciencia de la Tierra.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full" id="register">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-4">Regístrate Ahora</h2>
                  <a href='https://www.spaceappschallenge.org/2025/'>Ir al registro</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRegisterSection;
