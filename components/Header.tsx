import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export type NavLink = {
  name: string;
  href: string;
};

const links = (t: any) => [
  { name: t("home"), href: "/" },
  { name: t("work"), href: "/work" },
  { name: t("experience"), href: "/experience" },
  { name: t("about"), href: "/about" },
];

const Header = async () => {
  const t = await getTranslations("header");

  const navLinks = links(t);

  return (
    <header className="fixed top-0 left-0 h-18 w-full bg-background text-foreground flex justify-between items-center px-4 sm:px-12 py-4 z-50 shadow-lg">
      <div>
        <h1 className="font-bold">ptakondrej.dev</h1>
        <p className="text-sm text-muted-foreground">Ondřej Pták</p>
      </div>
      <nav className="md:flex gap-8 items-center hidden">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link">
            {link.name}
          </Link>
        ))}
        <ThemeSwitch />
      </nav>
      <MobileNav navLinks={navLinks} />
    </header>
  );
};

export default Header;
