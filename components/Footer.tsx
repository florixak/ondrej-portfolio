import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  return (
    <footer className="flex items-center justify-center md:justify-evenly flex-col md:flex-row w-full h-16 text-muted-foreground">
      <p className="text-center">{t("text")}</p>
      <p>&copy; {new Date().getFullYear()} Ondřej Pták</p>
    </footer>
  );
};

export default Footer;
