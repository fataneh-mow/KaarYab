"use client";

import {
    CalendarDays,
    Edit,
    Trash2,
    MapPin,
} from "lucide-react";

import {
    Opportunity,
} from "@/types/opportunity";


export default function MyOpportunityCard({
    opportunity,
}:{
    opportunity:Opportunity;
}){


    return (

        <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">


            <div className="flex items-start justify-between gap-4">


                <div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
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





            <div className="mt-5 space-y-3">


                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">

                    <MapPin size={16}/>

                    {opportunity.location}

                </div>




                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">

                    <CalendarDays size={16}/>

                    Deadline:
                    <span className="font-medium">
                        {opportunity.deadline}
                    </span>

                </div>


            </div>





            <p className="mt-5 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">

                {opportunity.description}

            </p>





            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">


                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">

                    {opportunity.type}

                </span>





                <div className="flex gap-2">


                    <button
                        className="rounded-xl p-2 text-sky-600 transition hover:bg-sky-100 dark:hover:bg-sky-950"
                    >

                        <Edit size={18}/>

                    </button>




                    <button
                        className="rounded-xl p-2 text-red-600 transition hover:bg-red-100 dark:hover:bg-red-950"
                    >

                        <Trash2 size={18}/>

                    </button>


                </div>


            </div>


        </article>

    );

}