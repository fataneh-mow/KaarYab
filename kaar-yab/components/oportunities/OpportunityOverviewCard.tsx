import {
    CalendarDays,
    MapPin,
    Briefcase,
    Building2,
} from "lucide-react";

import type { Opportunity } from "@/types/opportunity";

interface Props {
    opportunity: Opportunity;
}

export default function OpportunityOverviewCard({
    opportunity,
}: Props) {

    return (

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Opportunity Overview
            </h3>

            <div className="mt-6 space-y-5">

                <Item
                    icon={<Building2 size={18}/>}
                    label="Organization"
                    value={opportunity.organization}
                />

                <Item
                    icon={<Briefcase size={18}/>}
                    label="Category"
                    value={opportunity.category}
                />

                <Item
                    icon={<MapPin size={18}/>}
                    label="Location"
                    value={opportunity.location}
                />

                <Item
                    icon={<CalendarDays size={18}/>}
                    label="Deadline"
                    value={opportunity.deadline}
                />

            </div>

        </div>

    );

}


function Item({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {

    return (

        <div className="flex items-start gap-3 rounded-xl bg-slate-100 p-3 dark:bg-slate-900">

            <div className="mt-1 text-sky-600 dark:text-sky-400">
                {icon}
            </div>

            <div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {label}
                </p>

                <p className="font-semibold text-slate-900 dark:text-white">
                    {value}
                </p>

            </div>

        </div>

    );

}