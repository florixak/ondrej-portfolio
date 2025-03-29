import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "My Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 h-18 w-full bg-background text-foreground flex justify-between items-center px-12 py-4">
      <h1 className="font-bold">ptakondrej.dev</h1>
      <nav className="flex gap-8">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link">
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
