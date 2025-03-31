import CardTilt from "@/components/CardTilt";
import LittleAbout from "@/components/LittleAbout";
import Skills from "@/components/Skills";
import { Briefcase, CodeSquare } from "lucide-react";

export default function Home() {
  return (
    <>
      <LittleAbout />
      <Skills />
      <section className="flex gap-4 justify-center items-center mt-10 flex-wrap">
        <CardTilt
          title="Work & Projects"
          description="Here are some of my projects that I have worked on in the past."
          image={<CodeSquare className="card-image" />}
          href="/work"
        />
        <CardTilt
          title="Experience"
          description="Here are some of my experiences in the field of web development."
          image={<Briefcase className="card-image" />}
          href="/experience"
        />
      </section>
    </>
  );
}
