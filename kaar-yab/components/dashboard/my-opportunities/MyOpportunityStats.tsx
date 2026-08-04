"use client";

import {
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
} from "lucide-react";

export default function MyOpportunityStats(){
    return (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <StatCard
                icon={<BriefcaseBusiness size={22}/>}
                title="Total Opportunities"
                value="0"
            />
            <StatCard
                icon={<CheckCircle2 size={22}/>}
                title="Published"
                value="0"
            />
            <StatCard
                icon={<Clock3 size={22}/>}
                title="Expiring Soon"
                value="0"
            />
        </section>
    );
}

function StatCard({
    icon,
    title,
    value,
}:{
    icon:React.ReactNode;
    title:string;
    value:string;
}){

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-sky-100 p-3 text-sky-600 dark:bg-sky-950">
                    {icon}
                </div>

                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {value}
                </span>
            </div>

            <h3 className="mt-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {title}
            </h3>
        </div>
    );
}