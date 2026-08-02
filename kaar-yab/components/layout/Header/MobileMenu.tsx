"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/Navlinks";


interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    if (!open) return null;

    return (
        <div className="border-t border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
            <nav className="flex flex-col gap-4">
                {links.map((link) => {
                    const isActive =
                        link.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(link.href);

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className={`${isActive ? "text-sky-600 dark:text-sky-400" : "text-slate-600 dark:text-slate-300"} text-sm font-medium`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}