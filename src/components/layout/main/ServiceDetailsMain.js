import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ServiceDetailsPrimary from "@/components/sections/service-details/ServiceDetailsPrimary";

const ServiceDetailsMain = ( {service} ) => {
  return (
    <main>
      {/* <HeroInner title={service.title} currentItem={service.title} /> */}
      <ServiceDetailsPrimary service={service} />
    </main>
  );
};

export default ServiceDetailsMain;
