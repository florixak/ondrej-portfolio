import ThemeSwitch from "../ThemeSwitch";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LanguageSwitch from "./LanguageSwitch";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import CommandMenu from "../CommandMenu";
import KbdInfo from "./kbd-info";

export type NavLink = {
  name: string;
  href: string;
};

const links = (t: any): NavLink[] => [
  { name: t("home"), href: "/" },
  { name: t("work"), href: "/work" },
  { name: t("experience"), href: "/experience" },
  { name: t("about"), href: "/about" },
  { name: t("contact"), href: "/contact" },
];

const Header = async () => {
  const t = await getTranslations("header");

  const navLinks = links(t);

  return (
    <header className="fixed top-0 left-0 h-18 w-full bg-background text-foreground flex justify-between items-center px-4 sm:px-12 py-4 z-50 shadow-lg">
      <Link href="/" className="cursor-pointer w-auto">
        <h1 className="font-bold">ptakondrej.dev</h1>
        <p className="text-sm text-muted-foreground">Ondřej Pták</p>
      </Link>
      <nav className="md:flex gap-8 items-center hidden">
        <KbdInfo />

        {navLinks.map((link) => (
          <NavLink key={link.name} href={link.href} name={link.name} />
        ))}
        <CommandMenu navLinks={navLinks} />

        <ThemeSwitch />
        <LanguageSwitch />
      </nav>
      <MobileNav navLinks={navLinks} />
    </header>
  );
};

export default Header;
