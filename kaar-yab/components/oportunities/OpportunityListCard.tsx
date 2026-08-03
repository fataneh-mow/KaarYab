import Link from "next/link";
import {
    MapPin,
    Briefcase,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import type { Opportunity } from "@/types/opportunity";
import { Badge } from "../common";

interface Props {
    opportunity: Opportunity;
}


export default function OpportunityListCard({
    opportunity,
}: Props) {

    return (

        <article
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 md:flex-row md:items-center"
        >

            <div
                className="flex-1"
            >

                <div
                    className="mb-3 flex flex-wrap items-center gap-3"
                >

                    <Badge variant="warning">
                        {opportunity.category}
                    </Badge>


                    <Badge variant="success" >
                        {opportunity.type}
                    </Badge>

                </div>



                <h3
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >
                    {opportunity.title}
                </h3>


                <p
                    className="mt-2 text-sm text-slate-600 dark:text-slate-400"
                >
                    {opportunity.organization}
                </p>



                <div
                    className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400"
                >

                    <span
                        className="flex items-center gap-2"
                    >
                        <MapPin size={16} />
                        {opportunity.location}
                    </span>


                    <span
                        className="flex items-center gap-2"
                    >
                        <Briefcase size={16} />
                        {opportunity.category}
                    </span>


                    <span
                        className="flex items-center gap-2"
                    >
                        <CalendarDays size={16} />
                        {opportunity.deadline}
                    </span>

                </div>



                <div
                    className="mt-4 flex flex-wrap gap-2"
                >

                    {
                        opportunity.tags.map((tag) => (

                            <span
                                key={tag}
                                className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                            >
                                {tag}
                            </span>

                        ))
                    }

                </div>


            </div>



            <Link
                href={`/opportunities/${opportunity.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >

                View Details

                <ArrowRight size={18} />

            </Link>


        </article>

    );
}