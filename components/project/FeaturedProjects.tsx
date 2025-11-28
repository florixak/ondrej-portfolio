import { getTranslations } from "next-intl/server";
import Projects from "./Projects";

const FeaturedProjects = async () => {
  const t = await getTranslations("projects");

  return (
    <section className="flex-center flex-col gap-4 bg-secondary min-h-screen">
      <div className="text-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-foreground">
          {t("featured.title")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("featured.description")}
        </p>
      </div>
      <Projects featured={true} />
    </section>
  );
};

export default FeaturedProjects;
