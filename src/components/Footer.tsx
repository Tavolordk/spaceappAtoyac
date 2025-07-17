import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">NASA Space Apps Challenge</h3>
            <p className="text-sm">Inspirando a la próxima generación de exploradores espaciales</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces Rápidos</h4>
            <ul className="text-sm">
              <li><a href="#about" className="hover:text-[#D4471D]">Acerca</a></li>
              <li><a href="#register" className="hover:text-[#D4471D]">Registro</a></li>
              <li><a href="#sponsors" className="hover:text-[#D4471D]">Patrocinadores</a></li>
              <li><a href="#" className="hover:text-[#D4471D]">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#D4471D]">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-2xl hover:text-[#D4471D]">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-2xl hover:text-[#D4471D]">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-2xl hover:text-[#D4471D]">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 NASA Space Apps Challenge Guerrero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;