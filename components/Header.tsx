import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import { Link } from "@/i18n/routing";

export const links = [
  { name: "Home", href: "/" },
  { name: "My Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

const Header = () => {
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
      <MobileNav />
    </header>
  );
};

export default Header;
