import JobApplicationForm from "@/components/sections/jobs/JobApplicationForm";
import JobsGrid from "@/components/sections/jobs/JobsGrid";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Trabaja con Nosotros | NVO - Soluciones Logísticas",
  description:
    "Únete al equipo de NVO. Ofrecemos oportunidades de empleo en logística y distribución con beneficios competitivos y desarrollo profesional.",
};

export default function TrabajaConNosotros() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"}>
      <ThemeController />
      <main>
        <JobsGrid />
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}