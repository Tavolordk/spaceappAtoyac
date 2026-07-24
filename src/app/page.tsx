import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutRegisterSection from "@/components/AboutRegisterSection";
import FeaturesSection from "@/components/FeaturesSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutRegisterSection />
        <FeaturesSection />
        <SponsorsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
