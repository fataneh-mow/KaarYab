import Link from "next/link";
import {
    MapPin,
    Briefcase,
    CalendarDays,
    ArrowRight,
    Building2,
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
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-900"
        >

            <div
                className="flex flex-col gap-6 lg:flex-row lg:items-center"
            >

                <div
                    className="flex-1"
                >

                    <div
                        className="flex flex-wrap items-center gap-3"
                    >

                        <Badge variant="warning">
                            {opportunity.category}
                        </Badge>


                        <Badge variant="success">
                            {opportunity.type}
                        </Badge>


                    </div>



                    <h3
                        className="mt-4 text-2xl font-bold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400"
                    >
                        {opportunity.title}
                    </h3>




                    <div
                        className="mt-3 flex items-center gap-2 text-slate-600 dark:text-slate-400"
                    >

                        <Building2
                            size={18}
                            className="text-sky-600"
                        />

                        <span>
                            {opportunity.organization}
                        </span>

                    </div>




                    <div
                        className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
                    >

                        <div
                            className="flex items-center gap-2"
                        >

                            <MapPin
                                size={16}
                                className="text-sky-600"
                            />

                            {opportunity.location}

                        </div>




                        <div
                            className="flex items-center gap-2"
                        >

                            <Briefcase
                                size={16}
                                className="text-sky-600"
                            />

                            {opportunity.type}

                        </div>




                        <div
                            className="flex items-center gap-2"
                        >

                            <CalendarDays
                                size={16}
                                className="text-sky-600"
                            />

                            {opportunity.deadline}

                        </div>


                    </div>




                    <div
                        className="mt-5 flex flex-wrap gap-2"
                    >

                        {
                            opportunity.tags.map((tag) => (

                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                                >
                                    {tag}
                                </span>

                            ))
                        }


                    </div>


                </div>




                <div
                    className="flex lg:flex-col lg:items-end"
                >

                    <Link
                        href={`/opportunities/${opportunity.id}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                    >

                        View Details

                        <ArrowRight
                            size={18}
                        />

                    </Link>


                </div>


            </div>


        </article>

    );

}