const Footer = () => {
  return (
    <footer className="bg-[#3B2B22] text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">NASA Space Apps Challenge</h3>
            <p className="text-sm">Inspiring the next generation of space explorers</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#about" className="hover:text-[#B7D8CC]">About</a></li>
              <li><a href="#register" className="hover:text-[#B7D8CC]">Register</a></li>
              <li><a href="#sponsors" className="hover:text-[#B7D8CC]">Sponsors</a></li>
              <li><a href="#" className="hover:text-[#B7D8CC]">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#B7D8CC]"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-2xl hover:text-[#B7D8CC]"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-2xl hover:text-[#B7D8CC]"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-2xl hover:text-[#B7D8CC]"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 NASA Space Apps Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;