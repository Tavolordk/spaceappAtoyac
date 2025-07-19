'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutRegisterSection from '@/components/AboutRegisterSection';
import FeaturesSection from '@/components/FeaturesSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function HomePage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Lda_IcrAAAAAMsdSY6DfMXEwH5eTD9nzn_OM6EP"
      scriptProps={{ async: true, defer: true, appendTo: 'body' }}
    >      <Navbar />
      <Hero />
      <AboutRegisterSection />
      <FeaturesSection />
      <SponsorsSection />
      <Footer />
    </GoogleReCaptchaProvider>
  );
}