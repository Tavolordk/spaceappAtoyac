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
            <form className="space-y-4">
              <input type="text" placeholder="Nombre Completo" className="w-full p-2 rounded-md border border-[#7F4F24]" name="nombre" />
              <input type="text" placeholder="Lugar de origen" className="w-full p-2 rounded-md border border-[#7F4F24]" name="lugar" />
              <input type="email" placeholder="Correo Electrónico" className="w-full p-2 rounded-md border border-[#7F4F24]" name="email" />
              <input type="number" placeholder="Edad" className="w-full p-2 rounded-md border border-[#7F4F24]" name="edad" />
              <select className="w-full p-2 rounded-md border border-[#7F4F24]" name="rol">
                <option value="">Selecciona tu rol</option>
                <option value="profesionista">Profesionista</option>
                <option value="estudiante">Estudiante</option>
                <option value="otro">Otro</option>
              </select>
              <select className="w-full p-2 rounded-md border border-[#7F4F24]" name="rol">
                <option value="">Selecciona tu institución</option>
                <option value="uagro23">UAGRO PREPA 23</option>
                <option value="uagro22">UAGRO PREPA 22</option>
                <option value="uagro22">CBTIS 23</option>
                <option value="other">Otro</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#2A9D8F] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#21867B] transition duration-300"
              >
                Enviar Registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRegisterSection;