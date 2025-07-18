'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutRegisterSection from '@/components/AboutRegisterSection';
import FeaturesSection from '@/components/FeaturesSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutRegisterSection />
      <FeaturesSection />
      <SponsorsSection />
      <Footer />
    </>
  );
}