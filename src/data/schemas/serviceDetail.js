export const getServiceDetailSchema = (service) => {
  const serviceUrl = `https://dignifydtalentconnect.com/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
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
    url: serviceUrl,
  };

  const breadcrumbListSchema = {
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
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return [serviceSchema, breadcrumbListSchema];
};
