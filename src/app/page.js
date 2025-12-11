import Home7Main from "@/components/layout/main/Home7Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "NVO - Soluciones Logísticas | Donde Lo Necesitas",
  description: "NVO - Especialistas en soluciones logísticas rápidas, confiables y seguras. Flotas dedicadas, servicio express y distribución multientrega con cobertura nacional en Colombia.",
};
export default function Home7Onepage() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"} isOnepage={true}>
      <ThemeController />
      <Home7Main />
    </PageWrapper>
  );
}
