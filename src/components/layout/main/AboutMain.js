import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AboutNVO from "@/components/sections/about/AboutNVO";
import Vision from "@/components/sections/vision/Vision";
import ValueProposition from "@/components/sections/value/ValueProposition";
import Coverage from "@/components/sections/coverage/Coverage";

const AboutMain = () => {
  return (
    <main>
      <HeroInner title={"Quienes Somos"} currentItem={"Quienes Somos"} />
      <AboutNVO />
      <Vision />
      <ValueProposition />
      <Coverage />
    </main>
  );
};

export default AboutMain;
