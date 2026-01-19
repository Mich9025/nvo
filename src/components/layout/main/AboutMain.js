import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AboutNVO from "@/components/sections/about/AboutNVO";
import Vision from "@/components/sections/vision/Vision";
import ValueProposition from "@/components/sections/value/ValueProposition";
import Coverage from "@/components/sections/coverage/Coverage";
import Image from "next/image";
import aboutBannerBgImage from "@/assets/img/nosotros/portada.png";

const AboutMain = () => {  
 const image = aboutBannerBgImage.src;
  return (
    <main>
      <HeroInner title={"Quienes Somos"} currentItem={"Quienes Somos"} bannerBgImage={image} />
      <AboutNVO />
      <Vision />
      <ValueProposition />
      <Coverage />
    </main>
  );
};

export default AboutMain;
