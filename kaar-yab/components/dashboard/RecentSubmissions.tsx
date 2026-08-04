"use client";

import {
    CalendarDays,
    MapPin,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { submissions } from "@/data/recentSubmissions";

export default function RecentSubmissions(){
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Recent Submissions
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Track the opportunities you submitted recently
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                {
                    submissions.map((submission)=>(
                        <div
                            key={submission.id}
                            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-sky-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between dark:border-slate-800"
                        >
                            <div className="space-y-2">
                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    {submission.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {submission.organization}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={15}/>
                                        {submission.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <CalendarDays size={15}/>
                                        {submission.date}
                                    </span>

                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                                <span
                                    className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    ${
                                        submission.status === "Approved"
                                        ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                                        : submission.status === "Rejected"
                                        ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                                    }
                                    `}
                                >
                                    {submission.status}
                                </span>
                                <Link
                                    href={`/opportunities/${submission.id}`}
                                    className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
                                >
                                    Details
                                    <ExternalLink size={15}/>
                                </Link>

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );

}