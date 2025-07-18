'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutRegisterSection from '@/components/AboutRegisterSection';
import FeaturesSection from '@/components/FeaturesSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
    <Script
  src="https://www.google.com/recaptcha/api.js?render=6Lda_IcrAAAAAMsdSY6DfMXEwH5eTD9nzn_OM6EP"
  strategy="afterInteractive"
/>
      <Navbar />
      <Hero />
      <AboutRegisterSection />
      <FeaturesSection />
      <SponsorsSection />
      <Footer />
    </>
  );
}