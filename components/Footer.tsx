import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  return (
    <footer className="flex items-center justify-center flex-col w-full h-16">
      <p>© {new Date().getFullYear()} Ondřej Pták</p>
      <p className="max-w-48 text-center">{t("text")}</p>
    </footer>
  );
};

export default Footer;
