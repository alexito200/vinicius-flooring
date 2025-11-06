import ContactSection from "../components/ContactSection";
import HeroSection from "../components/Hero";
import PricingSection from "../components/PricingSection";
import ServiceAreas from "../components/ServiceAreas";
import Services from "../components/Services";
import { Helmet } from "react-helmet-async";
import { BUSINESS_DESCRIPTION, SITE_URL } from "../seo/siteMetadata";

function Home() {
  return (
    <main>
      <Helmet>
        <title>Hardwood, Tile &amp; Epoxy Floors | Vinicius Flooring</title>
        <meta
          name="description"
          content="Vinicius Flooring delivers hardwood, tile, and epoxy flooring in Edison, NJ and Central Jersey with meticulous installation, refinishing, and dustless sanding services."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Hardwood, Tile &amp; Epoxy Floors | Vinicius Flooring" />
        <meta property="og:description" content={BUSINESS_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
      </Helmet>
      <HeroSection />
      <ServiceAreas />
      <Services />
      <PricingSection />
      <ContactSection headingLevel="h2" />
    </main>
  );
}

export default Home;
  