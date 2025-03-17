'use client';
import type { NextPage } from 'next';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Agenda from '../components/Agenda';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
  const handleRegister = () => {
    alert('¡Gracias por tu interés! Pronto abriremos el registro oficial.');
  };

  return (
    <>
      <SEO />
      <Navbar />
      <Hero onRegister={handleRegister} />
      <About />
      <Agenda />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
