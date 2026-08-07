import Navbar from "@/components/Navbar";
import Convocatoria from "@/components/Convocatoria";
import Footer from "@/components/Footer";
import AmbientExperience from "@/components/ambient/AmbientExperience";

export default function ConvocatoriaPage() {
  return (
    <>
      <Navbar />
      <AmbientExperience />
      <Convocatoria />
      <Footer />
    </>
  );
}
