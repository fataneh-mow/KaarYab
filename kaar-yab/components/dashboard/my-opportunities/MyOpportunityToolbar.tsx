"use client";

import Link from "next/link";

import {
    Plus,
    Search,
} from "lucide-react";


export default function MyOpportunityToolbar(){

    return (

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


                <div>

                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        My Opportunities
                    </h1>


                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Manage the opportunities you have created and published.
                    </p>

                </div>



                <Link
                    href="/dashboard/add-opportunity"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >

                    <Plus size={18}/>

                    Add Opportunity

                </Link>


            </div>




            <div className="mt-6">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />


                    <input
                        placeholder="Search your opportunities..."
                        className="h-12 w-full rounded-xl border border-slate-200 bg-transparent pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:text-white"
                    />


                </div>


            </div>


        </section>

    );

}