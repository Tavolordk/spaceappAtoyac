import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutRegisterSection from "@/components/AboutRegisterSection";
import FeaturesSection from "@/components/FeaturesSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import IntroVideoGate from "@/components/IntroVideoGate";
import AmbientExperience from "@/components/ambient/AmbientExperience";
import styles from "./CosmicGuerreroTheme.module.css";

export default function HomePage() {
  return (
    <IntroVideoGate>
      <div className={styles.theme}>
        <Navbar />
        <AmbientExperience />
        <main>
          <Hero />
          <AboutRegisterSection />
          <FeaturesSection />
          <SponsorsSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </IntroVideoGate>
  );
}
