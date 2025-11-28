"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { skills } from "@/data/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const getElementColor = (element: string) => {
  switch (element) {
    case "Fire":
      return "hover:shadow-red-500/20 hover:border-red-500/50";
    case "Ice":
      return "hover:shadow-cyan-500/20 hover:border-cyan-500/50";
    case "Earth":
      return "hover:shadow-emerald-500/20 hover:border-emerald-500/50";
    default:
      return "hover:shadow-primary/20 hover:border-primary/50";
  }
};

const Skills = () => {
  const t = useTranslations("home.skills");

  return (
    <section className="flex w-full flex-col items-center justify-center py-10 px-4 bg-secondary min-h-[60vh]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground">{t("title")}</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {skills.map((category) => (
          <motion.div
            key={category.category}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-4 bg-background p-6 rounded-2xl border border-border shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{category.category}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground opacity-70">
                {category.element}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 },
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-card border border-border transition-all duration-300 ${getElementColor(
                    category.element
                  )} group`}
                >
                  <div className="relative w-8 h-8 overflow-hidden rounded-md bg-muted/50 p-1">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain group-hover:rotate-360 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
