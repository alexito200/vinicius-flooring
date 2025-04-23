import ContactSection from "../components/ContactSection";
import HeroSection from "../components/Hero";
import PricingSection from "../components/PricingSection";
import ServiceAreas from "../components/ServiceAreas";
import Services from "../components/Services";

function Home() {
    return (
      <>
      <HeroSection />
      <ServiceAreas />
      <Services />
      <PricingSection />
      <ContactSection />
      </>
    );
  }
  
  export default Home;
  