import AnimationWrapper from "@/components/AnimationWrapper";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Cards from "@/components/Cards";

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
