"use client";

import {
    PlusCircle,
} from "lucide-react";

import Link from "next/link";


export default function EmptyState(){

    return (

        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-950">


            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950">


                <PlusCircle size={30}/>


            </div>




            <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                No opportunities yet

            </h2>




            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">

                You haven't created any opportunities. Start sharing jobs, internships, and learning opportunities.

            </p>





            <Link
                href="/dashboard/add-opportunity"
                className="mt-6 inline-flex rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >

                Create Opportunity

            </Link>



        </section>

    );

}