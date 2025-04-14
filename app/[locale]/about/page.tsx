import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const tMeta = await getTranslations("metadata");
  return {
    title: `${tMeta("aboutTitle")}`,
  };
};

const AboutPage = () => {
  return (
    <section className="flex-center flex-col gap-4 mt-10">
      <h1>Let's talk about my journey</h1>
      <div className="flex flex-col gap-4 max-w-2xl border border-foreground/20 p-4 rounded-lg">
        <p>
          Everything started when I was 14 year old in elementary school, my
          online friend created Minecraft server and he introduced me to the
          world of programming. I was fascinated by how you could create your
          own plugins and minigames. So I started learning Java, and I was
          hooked in.
        </p>
        <p>
          I instatly know what high school should I choose and what I want to do
          in my future.
        </p>
        <p>
          In high school I was introduced to web development. In the beginning I
          did not understand how layout, media queries and more work.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
