import { Marquee } from "./magicui/marquee";

const skills = [
  {
    id: 1,
    name: "React",
    icon: "https://camo.githubusercontent.com/f93e05694a6f01f2f6a37713a454a942442a5ff2b33083891096a6f7e57842f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642",
  },
  {
    id: 2,
    name: "NextJS",
    icon: "https://camo.githubusercontent.com/d4ff95c6c85e810b4acfe5dbf01bf2b44680cf75945b21a7e5438c87b473f2c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 3,
    name: "TailwindCSS",
    icon: "https://camo.githubusercontent.com/b2eac0f505dfd05c25acf8c285b5eb346916090126c8836c6cbf9aeb754eac32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "https://camo.githubusercontent.com/d4cfec9550517aa67567e29843e3880ebf50bd7eeceafcd3b82875f17c9f564e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: "https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
  },
  {
    id: 6,
    name: "HTML",
    icon: "https://camo.githubusercontent.com/d4d9d935f85b68223a3514c6a889ea3ed6a77afb5f560c05baa1a1b168077830/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 7,
    name: "CSS",
    icon: "https://camo.githubusercontent.com/930c71eac967cc5cec61c0aa08ba3719f9cb68e28cdffa63b28b0a31be1663b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 8,
    name: "Vite",
    icon: "https://camo.githubusercontent.com/e9a836f9365e97788e7bf65da1191113e36b53e1083204680da198b83b4937ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f766974652d2532333634364346462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697465266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 9,
    name: "Java",
    icon: "https://camo.githubusercontent.com/bea90da226e09b503e6c8fde824f4816b98dcf30cd31e803006bf6335af06890/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6f70656e6a646b266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 10,
    name: "MySQL",
    icon: "https://camo.githubusercontent.com/38ce4d8be94d27406f2989b56efec7cdc5e2c2d6509600746fede440245c5afa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3434373941312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465",
  },
  {
    id: 11,
    name: "Git",
    icon: "https://camo.githubusercontent.com/94d83dc5838e2784bee25fe9e019bc2fda128676f32cef2f06baa0f6f3849b8c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465",
  },
];

const skillsFirst = skills.slice(0, Math.ceil(skills.length / 2));
const skillsSecond = skills.slice(Math.ceil(skills.length / 2), skills.length);

const Skills = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden max-w-2xl mx-auto">
      <h2 className="mb-8 text-2xl font-bold text-foreground">My Skills</h2>
      <div className="relative w-full scale-125">
        <Marquee pauseOnHover className="[--duration:20s]">
          {skillsFirst.map((skill) => (
            <img
              key={skill.id}
              src={skill.icon}
              alt={skill.name}
              className="rounded-md"
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {skillsSecond.map((skill) => (
            <img
              key={skill.id}
              src={skill.icon}
              alt={skill.name}
              className="rounded-md"
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 md:left-16 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 md:right-16 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

export default Skills;
