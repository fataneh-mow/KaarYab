import Link from "next/link";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";


interface OpportunityCardProps {
    opportunity: {
        id: string;
        title: string;
        organization: string;
        category: string;
        location: string;
        type: string;
        deadline: string;
        tags: string[];
    };
}


export default function OpportunityCard({
    opportunity,
}: OpportunityCardProps) {

    return (
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <div className="mb-5 flex items-start justify-between gap-4">

                <Badge>
                    {opportunity.category}
                </Badge>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                    {opportunity.type}
                </span>

            </div>


            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {opportunity.title}
            </h3>


            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">

                <div className="flex items-center gap-2">
                    <Building2 size={17} />
                    <span>
                        {opportunity.organization}
                    </span>
                </div>


                <div className="flex items-center gap-2">
                    <MapPin size={17} />
                    <span>
                        {opportunity.location}
                    </span>
                </div>


                <div className="flex items-center gap-2">
                    <CalendarDays size={17} />
                    <span>
                        Deadline: {opportunity.deadline}
                    </span>
                </div>

            </div>


            <div className="mt-5 flex flex-wrap gap-2">

                {opportunity.tags.map((tag) => (
                    <Badge
                        key={tag}
                        variant="primary"
                    >
                        {tag}
                    </Badge>
                ))}

            </div>


            <div className="mt-auto pt-6">

                <Link href={`/opportunities/${opportunity.id}`}>

                    <Button variant="primary">
                        View Details
                    </Button>

                </Link>

            </div>

        </article>
    );
}