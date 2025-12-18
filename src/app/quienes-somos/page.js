import AboutMain from "@/components/layout/main/AboutMain";
import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "About | Bastun- Business Consulting Next Js Template",
  description: "About | Bastun- Business Consulting Next Js Template",
};
export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
    >
      <ThemeController />
      <AboutMain />
    </PageWrapper>
  );
}
