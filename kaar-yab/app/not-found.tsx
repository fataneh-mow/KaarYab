import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "@/components/common";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="flex max-w-md flex-col items-center text-center">

                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                    <SearchX size={40} />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                    404
                </h1>

                <h2 className="mt-3 text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Page Not Found
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8"
                >
                    <Button>
                        Back to Home
                    </Button>
                </Link>

            </div>
        </main>
    );
}