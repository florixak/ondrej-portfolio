import { getTranslations } from "next-intl/server";
import Projects from "../project/Projects";

const FeaturedProjects = async () => {
  const t = await getTranslations("projects");

  return (
    <section className="flex-center flex-col gap-4 bg-secondary min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground">
          {t("featured.title")}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {t("featured.description")}
        </p>
      </div>
      <Projects featured={true} />
    </section>
  );
};

export default FeaturedProjects;
