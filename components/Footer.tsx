import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  return (
    <footer className="flex items-center justify-evenly flex-row w-full h-22 text-muted-foreground">
      <p className="text-center">{t("text")}</p>
      <p>© {new Date().getFullYear()} Ondřej Pták</p>
    </footer>
  );
};

export default Footer;
