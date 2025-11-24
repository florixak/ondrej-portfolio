import AnimationWrapper from "@/components/AnimationWrapper";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ShojiPanel from "@/components/ShojiPanel";
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

      <section className="flex gap-4 justify-center items-center flex-wrap my-16">
        <AnimationWrapper delay={0.4}>
          <ShojiPanel
            href="/work"
            title={t("work.title")}
            description={t("work.description")}
            icon={<CodeSquare size={48} />}
            buttonText={t("work.buttonText")}
          />
        </AnimationWrapper>

        <AnimationWrapper delay={0.6}>
          <ShojiPanel
            href="/experience"
            title={t("experience.title")}
            description={t("experience.description")}
            icon={<Briefcase size={48} />}
            buttonText={t("experience.buttonText")}
          />
        </AnimationWrapper>
      </section>

      <AnimationWrapper delay={0.2}>
        <FeaturedProjects />
      </AnimationWrapper>
    </>
  );
}
