import AnimationWrapper from "@/components/AnimationWrapper";
import FeaturedProjects from "@/components/landing-page/FeaturedProjects";
import Hero from "@/components/landing-page/Hero";
import Skills from "@/components/landing-page/Skills";
import Cards from "@/components/landing-page/Cards";

export default async function Home() {
  return (
    <>
      <Hero />
      <AnimationWrapper delay={0.2}>
        <Skills />
      </AnimationWrapper>

      <Cards />

      <AnimationWrapper delay={0.2}>
        <FeaturedProjects />
      </AnimationWrapper>
    </>
  );
}
