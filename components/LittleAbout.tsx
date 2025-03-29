import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdMail } from "react-icons/md";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/florixak",
  },
  {
    name: "E-Mail",
    icon: <MdMail />,
    href: "mailto:ondrej@ptakondrej.dev",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ondrej-ptak-1a4b3a1b8/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/florixak/",
  },
];

const LittleAbout = () => {
  return (
    <section className="flex flex-col gap-4 p-4 rounded-lg border-foreground/50 border mx-auto max-w-2xl text-foreground ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Ondřej Pták</h1>
          <p className="flex items-center gap-2 text-sm text-muted">
            <FiMapPin /> Pilsen, Czech Republic
          </p>
        </div>
        <div className="flex gap-4 text-3xl">
          {contacts.map((contact) => (
            <a key={contact.name} href={contact.href}>
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
      <p>
        I am a 19 year old Czech Front-end Web Developer who has been interested
        in coding since 8th grade. <br /> Currently, I am in my last year of
        high school, specializing in application development
      </p>
    </section>
  );
};

export default LittleAbout;
