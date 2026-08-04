"use client";

import {
    Building2,
    CalendarDays,
    MapPin,
    Trash2,
} from "lucide-react";

import toast from "react-hot-toast";

import {
    Opportunity,
} from "@/types/opportunity";

import {
    removeSavedOpportunity,
} from "@/lib/savedOpportunityStorage";

import Badge from "@/components/common/Badge";

import Link from "next/link";

export default function SavedOpportunityCard({
    opportunity,
    onRemove,
}:{
    opportunity:Opportunity;
    onRemove:()=>void;
}){


    const handleRemove = ()=>{

        removeSavedOpportunity(
            opportunity.id
        );


        toast.success(
            "Removed from saved opportunities"
        );


        onRemove();

    };


    return (

        <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">


            <div className="flex items-start justify-between gap-4">


                <div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {opportunity.title}
                    </h2>


                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {opportunity.organization}
                    </p>


                </div>


                <Badge variant="warning">
                    {opportunity.category}
                </Badge>


            </div>




            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">


                <div className="flex items-center gap-2">

                    <Building2 size={17}/>

                    {opportunity.organization}

                </div>



                <div className="flex items-center gap-2">

                    <MapPin size={17}/>

                    {opportunity.location}

                </div>



                <div className="flex items-center gap-2">

                    <CalendarDays size={17}/>

                    Deadline:
                    <span className="font-medium">
                        {opportunity.deadline}
                    </span>

                </div>


            </div>




            <div className="mt-auto flex justify-between gap-3 pt-8">


                <Link
                    href={`/opportunities/${opportunity.id}`}
                    className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                    View Details
                </Link>



                <button
                    onClick={handleRemove}
                    className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950"
                >

                    <Trash2 size={16}/>

                    Remove

                </button>


            </div>


        </article>

    );

}