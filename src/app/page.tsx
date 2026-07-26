import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutRegisterSection from "@/components/AboutRegisterSection";
import FeaturesSection from "@/components/FeaturesSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import IntroVideoGate from "@/components/IntroVideoGate";

export default function HomePage() {
  return (
    <IntroVideoGate>
      <Navbar />
      <main>
        <Hero />
        <AboutRegisterSection />
        <FeaturesSection />
        <SponsorsSection />
        <ContactForm />
      </main>
      <Footer />
    </IntroVideoGate>
  );
}
