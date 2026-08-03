"use client";

import Image from "next/image";
import Link from "next/link";

import { Search } from "lucide-react";

import { Button, Input } from "@/components/common";

export default function Hero() {
    return (
        <section className="relative flex min-h-[92vh] items-center overflow-hidden">

            <Image
                src="/images/landingPageHero.png"
                alt="KaarYab Hero"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/65" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">

                <span className="mb-6 rounded-full border border-sky-300/40 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 backdrop-blur">
                    Discover Jobs, Scholarships & Remote Opportunities
                </span>

                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
                    Find Your Next Opportunity
                    <span className="block text-sky-300">
                        in Afghanistan
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
                    KaarYab helps students, graduates, and professionals
                    discover jobs, internships, scholarships, remote work,
                    volunteer programs and skill-building opportunities in
                    one place.
                </p>

                <div
                    className="mt-10 flex w-full max-w-2xl items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl outline-none ring-0 focus:outline-none focus:ring-0 focus-within:outline-none focus-within:ring-0 dark:border-slate-700 dark:bg-slate-900"
                >
                    <Search
                        className="text-slate-400 dark:text-slate-500"
                        size={22}
                    />

                    <Input
                        placeholder="Search opportunities..."
                        className="border-none bg-transparent shadow-none"
                    />
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Link href="/opportunities">
                        <Button>
                            Browse Opportunities
                        </Button>
                    </Link>

                    <Link href="/auth/signup">
                        <Button variant="secondary">
                            Submit Opportunity
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    );
}