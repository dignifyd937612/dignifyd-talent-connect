const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Dignifyd Talent Connect",
  url: "https://dignifydtalentconnect.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dignifydtalentconnect.com/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dignifyd Talent Connect",
  alternateName: "Recruitment Platform",
  url: "https://dignifydtalentconnect.com/",
  logo: "https://dignifydtalentconnect.com/logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-877-735-0397",
    contactType: "technical support",
    contactOption: "TollFree",
    areaServed: "US",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/dignifydsolutions",
    "https://www.instagram.com/dignifyd/",
    "https://dignifydtalentconnect.com/",
  ],
};

export const homeSchema = [websiteSchema, organizationSchema];
