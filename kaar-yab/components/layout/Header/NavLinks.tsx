"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/Navlinks";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative text-sm font-medium transition-colors ${
                            isActive
                                ? "text-sky-600 dark:text-sky-400"
                                : "text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                        }`}
                    >
                        {link.name}

                        {isActive && (
                            <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-sky-500" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}