import Link from "next/link";

import {
    Building2,
    CalendarDays,
    MapPin,
} from "lucide-react";

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
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-700">
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 p-6 dark:from-slate-900 dark:to-slate-800">
                <div className="flex items-start justify-between gap-4">
                    <Badge variant="warning">
                        {opportunity.category}
                    </Badge>

                    <Badge variant="success">
                        {opportunity.type}
                    </Badge>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    {opportunity.title}
                </h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <Building2
                            size={17}
                            className="text-sky-600"
                        />

                        <span>
                            {opportunity.organization}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin
                            size={17}
                            className="text-sky-600"
                        />

                        <span>
                            {opportunity.location}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays
                            size={17}
                            className="text-sky-600"
                        />

                        <span>
                            Deadline: {opportunity.deadline}
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {opportunity.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="primary"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="mt-auto pt-8">
                    <Link href={`/opportunities/${opportunity.id}`}>
                        <Button variant="primary">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    );

}