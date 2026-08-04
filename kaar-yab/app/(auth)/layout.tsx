import { Logo } from "@/components/layout/Header";
import { ThemeToggle } from "@/components/common";
import Link from "next/link";


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <main
            className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-900"
        >

            <div
                className="w-full max-w-md"
            >


                <div
                    className="mb-8 flex justify-between items-center"
                >

                    <Link href="/">
                        <Logo />
                    </Link>
                    <ThemeToggle />


                </div>


                <div
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950"
                >

                    {children}

                </div>


                <p
                    className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                    © {new Date().getFullYear()} KaarYab Afghanistan
                </p>


            </div>


        </main>

    );

}