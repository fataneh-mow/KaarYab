"use client";

import { Menu } from "lucide-react";
import { Logo, NavLinks} from "./index";
import { ThemeToggle } from "@/components/common";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80  backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
        >
            <div
                className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
            >
                <Logo />
                <NavLinks />
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {/* btn has to become reuslabe */}
                    <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        aria-label="Open menu"
                    >
                        <Menu size={22} />
                    </button>

                </div>

            </div>
        </header>
    );
}