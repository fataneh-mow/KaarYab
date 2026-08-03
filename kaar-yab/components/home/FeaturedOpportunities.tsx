import Link from "next/link";
import { ArrowRight } from "lucide-react";

import OpportunityCard from "../oportunities/OpportunityCard";
import { Button } from "@/components/common";
import { opportunities } from "@/data/opportunities";

export default function FeaturedOpportunities() {
    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-12 flex items-end justify-between">

                    <div>
                        <p className="mb-3 text-sm font-semibold text-sky-600">
                            Featured
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Latest Opportunities
                        </h2>

                        <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
                            Explore selected jobs, internships, scholarships,
                            and learning opportunities.
                        </p>
                    </div>


                    <Link
                        href="/opportunities"
                        className="hidden md:block"
                    >
                        <Button variant="secondary">
                            View All
                            <ArrowRight size={18} />
                        </Button>
                    </Link>

                </div>


                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {opportunities.map((opportunity) => (
                        <OpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                        />
                    ))}

                </div>


                <div className="mt-10 flex justify-center md:hidden">
                    <Link href="/opportunities">
                        <Button variant="secondary">
                            View All Opportunities
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>


            </div>
        </section>
    );
}