import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/app/[lang]/dictionaries";

type HeaderProps = {
  lang: Locale;
};

const Header = async ({ lang }: HeaderProps) => {
  const dict = await getDictionary(lang as Locale);
  const { header } = dict;
  const { home, work, experience, about } = header;

  // Add language prefix to all links
  const links = [
    { name: home, href: `/${lang}` },
    { name: work, href: `/${lang}/work` },
    { name: experience, href: `/${lang}/experience` },
    { name: about, href: `/${lang}/about` },
  ];

  return (
    <header className="fixed top-0 left-0 h-18 w-full bg-background text-foreground flex justify-between items-center px-4 sm:px-12 py-4 z-50 shadow-lg">
      <div>
        <h1 className="font-bold">ptakondrej.dev</h1>
        <p className="text-sm text-muted-foreground">Ondřej Pták</p>
      </div>
      <nav className="md:flex gap-8 items-center hidden">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link">
            {link.name}
          </Link>
        ))}
        <ThemeSwitch />
      </nav>
      <MobileNav links={links} />
    </header>
  );
};

export default Header;
