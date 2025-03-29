import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    name: "GitHub",
    icon: <Github />,
    href: "https://github.com/florixak",
  },
  {
    name: "E-Mail",
    icon: <Mail />,
    href: "mailto:ondrej@ptakondrej.dev",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/ond%C5%99ej-pt%C3%A1k-0ba354347/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/florixak/",
  },
];

const LittleAbout = () => {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-lg border-foreground/20 border mx-auto max-w-2xl text-foreground">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">Ondřej Pták</h1>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <MapPin /> Pilsen, Czech Republic
          </p>
        </div>
        <div className="flex gap-4 text-3xl">
          {contacts.map((contact) => (
            <a key={contact.name} href={contact.href} target="_blank">
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
      <ul className="flex flex-col gap-2 text-base list-disc list-outside ml-5">
        <li>
          I am a 19 year old Czech Front-end Web Developer who has been
          interested in coding since 8th grade.
        </li>
        <li>
          Currently, I am in my last year of high school, specializing in
          application development.
        </li>
      </ul>
    </section>
  );
};

export default LittleAbout;
