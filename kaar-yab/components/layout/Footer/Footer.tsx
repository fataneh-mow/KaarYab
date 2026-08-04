import Link from "next/link";
import { Logo } from "@/components/layout/Header";
import FooterLinks from "./FooterLinks";
import { footerSections } from "@/data/footerData";
import { socials } from "@/data/socialsFooter";

export default function Footer() {

    return (
        <footer className="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
                    <div>
                        <Logo />

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                            KaarYab Afghanistan helps students, graduates,
                            and professionals discover jobs, internships,
                            scholarships, remote work, and learning
                            opportunities from one trusted platform.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socials.map((social) => {

                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.href}
                                        href={social.href}
                                        className="flex size-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-sky-500 hover:bg-sky-600 hover:text-white dark:border-slate-700"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );

                            })}
                        </div>
                    </div>

                    {footerSections.map((section) => (
                        <FooterLinks
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} KaarYab Afghanistan.
                        All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="transition hover:text-sky-600"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-sky-600"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );

}