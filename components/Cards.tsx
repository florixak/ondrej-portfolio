import React from "react";
import AnimationWrapper from "./AnimationWrapper";
import ShojiPanel from "./ShojiPanel";
import { Briefcase, CodeSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Cards = async () => {
  const t = await getTranslations("home");
  return (
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
  );
};

export default Cards;
