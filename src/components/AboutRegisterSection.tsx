import { useEffect, useState } from 'react';
import { useRecaptcha } from '@/hooks/useRecaptcha';
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}


const AboutRegisterSection = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    lugar: '',
    institucion: '',
    edad: '',
    rol: ''
  });

  // Cargar el script de reCAPTCHA una vez al montar
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const [captchaToken, setCaptchaToken] = useState<string | null>(null);

// Hook para cargar y ejecutar reCAPTCHA
useRecaptcha("6Lda_lcrAAAAAMsdSY6DfMXEwH5eTD9nzn_OM6EP", token => setCaptchaToken(token));

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaToken) {
    alert("❌ No se validó el reCAPTCHA");
    return;
  }

  try {
    const res = await fetch('https://spaceapp-backend-production-a1fe.up.railway.app/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, captchaToken })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Registro enviado');
      setForm({
        nombre: '', correo: '', telefono: '', lugar: '',
        institucion: '', edad: '', rol: ''
      });
    } else {
      alert('❌ Error al registrar');
      console.error(data);
    }
  } catch (error) {
    alert('❌ Error de conexión con el servidor');
    console.error(error);
  }
};

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre Completo" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.nombre} onChange={handleChange} required />
              <input type="email" name="correo" placeholder="Correo Electrónico" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.correo} onChange={handleChange} required />
              <input type="number" name="telefono" placeholder="Teléfono" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.telefono} onChange={handleChange} required />
              <input type="text" name="lugar" placeholder="Lugar de Origen" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.lugar} onChange={handleChange} required />
              <input type="number" name="edad" placeholder="Edad" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.edad} onChange={handleChange} required />
              <select name="rol" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.rol} onChange={handleChange} required>
                <option value="">Selecciona tu rol</option>
                <option value="profesionista">Profesionista</option>
                <option value="estudiante">Estudiante</option>
                <option value="otro">Otro</option>
              </select>
              <select name="institucion" className="w-full p-2 rounded-md border border-[#7F4F24]" value={form.institucion} onChange={handleChange} required>
                <option value="">Selecciona tu institución</option>
                <option value="uagro23">UAGRO PREPA 23</option>
                <option value="uagro22">UAGRO PREPA 22</option>
                <option value="cbtis23">CBTIS 23</option>
                <option value="otro">Otro</option>
              </select>

              <div className="g-recaptcha" data-sitekey="6Lda_IcrAAAAAMsdSY6DfMXEwH5eTD9nzn_OM6EP"></div>

              <button type="submit" className="w-full bg-[#2A9D8F] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#21867B] transition duration-300">
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
