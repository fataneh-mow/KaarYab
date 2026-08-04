"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    getStoredOpportunities,
} from "@/lib/opportunityStorage";

import {
    useAuth,
} from "@/hooks/useAuth";

import {
    Opportunity,
} from "@/types/opportunity";

import {
    MapPin,
    CalendarDays,
    BriefcaseBusiness,
} from "lucide-react";

export default function RecentSubmissions(){
    const {
        user,
    } = useAuth();
    const [
        submissions,
        setSubmissions,
    ] = useState<Opportunity[]>([]);

    useEffect(()=>{
        if(!user){
            return;
        }
        const opportunities =
            getStoredOpportunities();

        const userOpportunities =
            opportunities
                .filter(
                    opportunity =>
                        opportunity.createdBy === user.id
                )
                .sort(
                    (a,b)=>
                        new Date(b.createdAt).getTime()
                        -
                        new Date(a.createdAt).getTime()
                )
                .slice(0,5);
        setSubmissions(
            userOpportunities
        );
    },[
        user,
    ]);
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between">
                <div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Recent Submissions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Your latest submitted opportunities
                    </p>

                </div>
                <BriefcaseBusiness
                    size={24}
                    className="text-sky-600"
                />
            </div>
            {
                submissions.length === 0 ? (
                    <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            No submitted opportunities yet.
                        </p>
                    </div>
                ) : (
                    <div className="mt-6 space-y-4">
                        {
                            submissions.map(
                                opportunity => (
                                    <div
                                        key={opportunity.id}
                                        className="group rounded-2xl border border-slate-200 p-5 transition hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:hover:border-sky-700"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white">
                                                    {opportunity.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                                    {opportunity.organization}
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                                {opportunity.category}
                                            </span>
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={15}/>
                                                {opportunity.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BriefcaseBusiness size={15}/>
                                                {opportunity.type}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CalendarDays size={15}/>
                                                {new Date(
                                                    opportunity.createdAt
                                                ).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                )
            }
        </section>
    );
}