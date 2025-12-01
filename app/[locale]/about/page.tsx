import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const tMeta = await getTranslations("metadata");
  return {
    title: `${tMeta("aboutTitle")}`,
  };
};

const AboutPage = async () => {
  const t = await getTranslations("about");
  return (
    <section className="flex-center flex-col gap-4 mt-10">
      <h1>Let's talk about my journey</h1>
      <div className="flex flex-col gap-4 max-w-2xl border border-foreground/20 p-4 rounded-lg"></div>
    </section>
  );
};

export default AboutPage;
