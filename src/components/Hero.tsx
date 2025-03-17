import Image from 'next/image';

const Hero = ({ onRegister }: { onRegister: () => void }) => {
  return (
    <section className="hero">
      <div className="container text-center">
        <Image
          src="/NASA Space Apps Challenge 2025 ATOYAC LOGO.png"
          alt="NASA Space Apps Challenge 2025 Atoyac"
          width={300}
          height={300}
          className="hero-logo img-fluid"
          priority={true}
        />
        <h2 className="section-title">Únete al mayor hackathon espacial</h2>
        <p className="mb-4">
          Vive la experiencia de innovación y colaboración más grande del mundo.
          Comparte tu talento y creatividad para resolver desafíos relacionados con la Tierra y el espacio.
        </p>
        <button className="btn btn-custom" onClick={onRegister}>
          Regístrate Ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
