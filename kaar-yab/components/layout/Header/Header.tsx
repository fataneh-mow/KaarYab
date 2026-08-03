"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button, ThemeToggle } from "@/components/common";

import { Logo, NavLinks, MobileMenu } from "./index";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-blue-50 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />

                <NavLinks />

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Button
                        variant="ghost"
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </Button>
                </div>
            </div>

            <MobileMenu
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
}