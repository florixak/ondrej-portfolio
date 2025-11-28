import React from "react";
import AnimationWrapper from "./AnimationWrapper";
import ShojiPanel from "./ShojiPanel";
import { Briefcase, CodeSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Cards = async () => {
  const t = await getTranslations("home");
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground">
          {t("cards.title")}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {t("cards.description")}
        </p>
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap my-16">
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
      </div>
    </section>
  );
};

export default Cards;
