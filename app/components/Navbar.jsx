"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const LinkItem = ({ href, label }) => {
    const active = pathname === href || (href === "/" && pathname === "/");
    return (
      <Link
        href={href}
        className="relative text-white text-sm font-medium"
      >
        {label}
    
        <span
          className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-8 bg-white transition-opacity ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </Link>
    );
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo (serif like screenshot) */}
        <Link href="/" className="text-white font-serif text-3xl font-bold">
          Estate
        </Link>

        {/* Centered nav */}
        <nav className="hidden md:flex gap-10 items-center group">
          <LinkItem href="/" label="Home" />
          <LinkItem href="/apartments" label="Apartments" />
          <LinkItem href="/about" label="About us" />
          <LinkItem href="/blog" label="Blog" />
        </nav>

        {/* Contact button (outlined) */}
        <Link
          href="/contact"
          className="border border-white/90 text-white px-5 py-2 text-sm font-semibold rounded-sm hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
