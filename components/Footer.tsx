import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  return (
    <footer className="flex items-center justify-center w-full h-16">
      <p className="max-w-48 text-center">{t("text")}</p>
    </footer>
  );
};

export default Footer;
