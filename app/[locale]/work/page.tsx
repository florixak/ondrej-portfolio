import AnimationWrapper from "@/components/AnimationWrapper";
import Projects from "@/components/project/Projects";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const tMeta = await getTranslations("metadata");
  return {
    title: `${tMeta("workTitle")}`,
  };
};

const WorkPage = async () => {
  return (
    <section className="flex-center flex-col gap-4 p-4">
      <AnimationWrapper delay={0.2}>
        <h2 className="text-2xl font-bold text-foreground">My Work</h2>
      </AnimationWrapper>
      <Projects />
    </section>
  );
};

export default WorkPage;
