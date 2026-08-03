import { Logo } from "@/components/layout/Header";
import FooterLinks from "./FooterLinks";
import { footerSections } from "@/data/footerData";


export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-blue-50 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-10 md:grid-cols-4">

                    <div className="space-y-4">
                        <Logo />

                        <p className="max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                            KaarYab Afghanistan helps students and job seekers discover opportunities, internships, scholarships, and remote work.
                        </p>
                    </div>


                    {footerSections.map((section) => (
                        <FooterLinks
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}

                </div>


                <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} KaarYab Afghanistan. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}