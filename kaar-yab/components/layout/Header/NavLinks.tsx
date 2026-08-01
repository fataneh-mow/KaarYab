import Link from "next/link";
import { links } from "@/constants/Navlinks";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="
            text-sm
            font-medium
            text-slate-600
            transition
            hover:text-sky-600
            dark:text-slate-300
            dark:hover:text-sky-400
          "
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}