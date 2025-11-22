import AnimationWrapper from "@/components/AnimationWrapper";
import CardContent from "@/components/CardContent";
import CardTilt from "@/components/CardTilt";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Briefcase, CodeSquare } from "lucide-react";

import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <>
      <Hero />
      <AnimationWrapper delay={0.2}>
        <Skills />
      </AnimationWrapper>

      <section className="flex gap-4 justify-center items-center flex-wrap mt-8">
        <AnimationWrapper delay={0.4}>
          <CardTilt href="/work">
            <CardContent
              title={t("work.title")}
              description={t("work.description")}
              image={<CodeSquare className="card-image" />}
              buttonText={t("work.buttonText")}
            />
          </CardTilt>
        </AnimationWrapper>

        <AnimationWrapper delay={0.6}>
          <CardTilt href="/experience">
            <CardContent
              title={t("experience.title")}
              description={t("experience.description")}
              image={<Briefcase className="card-image" />}
              buttonText={t("experience.buttonText")}
            />
          </CardTilt>
        </AnimationWrapper>
      </section>

      <AnimationWrapper delay={0.8}>
        <FeaturedProjects />
      </AnimationWrapper>
    </>
  );
}
