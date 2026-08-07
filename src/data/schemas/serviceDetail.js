export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Global Recruitment",
  serviceType: "Global Recruitment",
  description:
    "Global recruitment services helping organizations hire qualified talent across borders through executive search, permanent placement, and contract staffing solutions.",
  provider: {
    "@type": "Organization",
    name: "Dignifyd Talent Connect",
    url: "https://dignifydtalentconnect.com/",
    logo: "https://dignifydtalentconnect.com/logo.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://dignifydtalentconnect.com/services/global-recruitment",
};

export const breadcrumbListSchema = {
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
      name: "Services",
      item: "https://dignifydtalentconnect.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Global Recruitment",
      item: "https://dignifydtalentconnect.com/services/global-recruitment",
    },
  ],
};

export const serviceDetailSchema = [serviceSchema, breadcrumbListSchema];
