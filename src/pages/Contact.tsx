import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactSection";
import { SITE_URL } from "../seo/siteMetadata";

function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact Vinicius Flooring | Free Flooring Estimates in Edison, NJ</title>
        <meta
          name="description"
          content="Contact Vinicius Flooring for hardwood, tile, and epoxy flooring estimates in Edison, NJ and surrounding Central Jersey communities."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Vinicius Flooring" />
        <meta
          property="og:description"
          content="Request a flooring estimate or consultation with Vinicius Flooring serving Edison and Central Jersey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
      </Helmet>
      <ContactSection headingLevel="h1" />
    </main>
  );
}

export default Contact;
  