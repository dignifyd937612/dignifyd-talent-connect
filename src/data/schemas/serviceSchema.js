const breadcrumbItems = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dignifydtalentconnect.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://dignifydtalentconnect.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://dignifydtalentconnect.com/services",
      },
    ],
  },
];

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

export const serviceSchema = [breadcrumbItems, organizationSchema];
