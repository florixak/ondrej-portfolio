import BuffetImage from "@/assets/buffet/buffet.png";
import BuffetImage2 from "@/assets/buffet/buffet2.png";
import BuffetImage3 from "@/assets/buffet/buffet3.png";
import BuffetImage4 from "@/assets/buffet/buffet4.png";
import BuffetImage5 from "@/assets/buffet/buffet5.png";
import BuffetImage6 from "@/assets/buffet/buffet6.png";
import { Project, Experience } from "@/types/types";
import { Star, School, Github, Mail, Linkedin, Instagram } from "lucide-react";
import React from "react";

export const projects = (t: any): Project[] => [
  {
    id: "1",
    title: t("buffet.title"),
    translationTitle: "buffet",
    description: t("buffet.description"),
    detailedDescription: t("buffet.detailedDescription"),
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Axios",
      "Zustand",
      "React Router",
      "React Query",
    ],
    featured: true,
    url: "https://buffet.vlastas.cc/",
    images: [
      BuffetImage,
      BuffetImage2,
      BuffetImage3,
      BuffetImage4,
      BuffetImage5,
      BuffetImage6,
    ],
    github: "https://github.com/Web-Projekty/buffet-rezervace",
    createdAt: "2024-09-13",
    lastUpdated: "2024-09-13",
  },
  {
    id: "2",
    title: t("pixelverse.title"),
    translationTitle: "pixelverse",
    description: t("pixelverse.description"),
    detailedDescription: t("pixelverse.detailedDescription"),
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sanity.io",
      "Tanstack Query",
      "Tanstack Table",
    ],
    featured: true,
    url: "https://pixel-verse-eta.vercel.app/",
    images: [
      BuffetImage,
      BuffetImage2,
      BuffetImage3,
      BuffetImage4,
      BuffetImage5,
      BuffetImage6,
    ],
    github: "https://github.com/florixak/PixelVerse",
    createdAt: "2024-09-13",
    lastUpdated: "2024-09-13",
  },
];

export const experience = (t: any): Experience[] => [
  {
    id: "1",
    date: "2020 - present",
    title: t("ownprojects.title"),
    subtitle: t("ownprojects.subtitle"),
    description: t("ownprojects.description"),
    icon: React.createElement(Star),
  },
  {
    id: "2",
    date: "2021 - 2025",
    title: t("education.highschool.title"),
    subtitle: t("education.highschool.subtitle"),
    description: t("education.highschool.description"),
    icon: React.createElement(School),
  },
  {
    id: "3",
    date: "2024 - 2025",
    title: t("projects.buffet.title"),
    subtitle: t("projects.buffet.subtitle"),
    description: t("projects.buffet.description"),
    icon: React.createElement(School),
  },
  {
    id: "4",
    date: "2025 - present",
    title: t("projects.pixelverse.title"),
    subtitle: t("projects.pixelverse.subtitle"),
    description: t("projects.pixelverse.description"),
    icon: React.createElement(School),
  },
  {
    id: "5",
    date: "2025 - present",
    title: t("education.university.title"),
    subtitle: t("education.university.subtitle"),
    description: t("education.university.description"),
    icon: React.createElement(School),
  },
];

export const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/florixak",
  },
  {
    name: "E-Mail",
    icon: Mail,
    href: "mailto:ondrej@ptakondrej.dev",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ptakondrej",
  },
];

export const skills = [
  {
    category: "Frontend",
    element: "Fire",
    items: [
      {
        name: "React",
        icon: "https://camo.githubusercontent.com/f93e05694a6f01f2f6a37713a454a942442a5ff2b33083891096a6f7e57842f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642",
      },
      {
        name: "NextJS",
        icon: "https://camo.githubusercontent.com/d4ff95c6c85e810b4acfe5dbf01bf2b44680cf75945b21a7e5438c87b473f2c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "TailwindCSS",
        icon: "https://camo.githubusercontent.com/b2eac0f505dfd05c25acf8c285b5eb346916090126c8836c6cbf9aeb754eac32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "JavaScript",
        icon: "https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
      },
      {
        name: "HTML",
        icon: "https://camo.githubusercontent.com/d4d9d935f85b68223a3514c6a889ea3ed6a77afb5f560c05baa1a1b168077830/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "CSS",
        icon: "https://camo.githubusercontent.com/930c71eac967cc5cec61c0aa08ba3719f9cb68e28cdffa63b28b0a31be1663b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465",
      },
    ],
  },
  {
    category: "Backend",
    element: "Ice",
    items: [
      {
        name: "Java",
        icon: "https://camo.githubusercontent.com/bea90da226e09b503e6c8fde824f4816b98dcf30cd31e803006bf6335af06890/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6f70656e6a646b266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "MySQL",
        icon: "https://camo.githubusercontent.com/38ce4d8be94d27406f2989b56efec7cdc5e2c2d6509600746fede440245c5afa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3434373941312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "Spring Boot",
        icon: "https://camo.githubusercontent.com/38ce4d8be94d27406f2989b56efec7cdc5e2c2d6509600746fede440245c5afa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3434373941312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465",
      },
    ],
  },
  {
    category: "Tools",
    element: "Earth",
    items: [
      {
        name: "Git",
        icon: "https://camo.githubusercontent.com/94d83dc5838e2784bee25fe9e019bc2fda128676f32cef2f06baa0f6f3849b8c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "TypeScript",
        icon: "https://camo.githubusercontent.com/d4cfec9550517aa67567e29843e3880ebf50bd7eeceafcd3b82875f17c9f564e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "Vite",
        icon: "https://camo.githubusercontent.com/e9a836f9365e97788e7bf65da1191113e36b53e1083204680da198b83b4937ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f766974652d2532333634364346462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697465266c6f676f436f6c6f723d7768697465",
      },
      {
        name: "Docker",
        icon: "https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
      },
    ],
  },
];
