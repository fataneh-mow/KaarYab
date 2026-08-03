import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/common";


export default function AboutCTA() {

    return (

        <section
            className="bg-white py-20 dark:bg-slate-950"
        >

            <div
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >

                <div
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 px-6 py-16 text-center shadow-xl sm:px-12"
                >


                    <div
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"
                    />

                    <div
                        className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10"
                    />



                    <div
                        className="relative"
                    >

                        <span
                            className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                        >
                            KaarYab Afghanistan
                        </span>



                        <h2
                            className="mt-6 text-3xl font-extrabold text-white md:text-5xl"
                        >
                            Your next opportunity
                            <span className="block">
                                is waiting for you
                            </span>
                        </h2>



                        <p
                            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80"
                        >
                            Discover jobs, scholarships, internships,
                            remote work, and skill-building opportunities
                            designed to help you grow.
                        </p>



                        <div
                            className="mt-8 flex justify-center"
                        >

                            <Link href="/opportunities">

                                <Button
                                    variant="secondary"
                                >
                                    Explore Opportunities
                                    <ArrowRight size={18} />
                                </Button>

                            </Link>

                        </div>


                    </div>


                </div>


            </div>


        </section>

    );

}