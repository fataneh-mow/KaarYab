import Link from "next/link";

import { Button } from "@/components/common";


export default function AboutHero() {

    return (

        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 py-37 text-white"
        >

            <div
                className="absolute inset-0 bg-indigo-950/30"
            />


            <div
                className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
            >

                <span
                    className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                    About KaarYab Afghanistan
                </span>



                <h1
                    className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
                >
                    Connecting Afghan Youth
                    <span className="block text-sky-300">
                        With Better Opportunities
                    </span>
                </h1>



                <p
                    className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80"
                >
                    KaarYab is an opportunity finder platform that helps
                    students, graduates, and professionals discover jobs,
                    internships, scholarships, remote work, and skill-building
                    opportunities in one place.
                </p>



                <div
                    className="mt-10 flex justify-center"
                >

                    <Link href="/opportunities">

                        <Button>
                            Explore Opportunities
                        </Button>

                    </Link>

                </div>


            </div>

        </section>

    );
}