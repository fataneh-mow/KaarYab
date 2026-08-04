"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    PlusCircle,
    Search,
} from "lucide-react";

import Link from "next/link";

import MyOpportunityCard from "@/components/dashboard/my-opportunities/MyOpportunityCard";
import EmptyState from "@/components/dashboard/my-opportunities/EmptyState";

import {
    Opportunity,
} from "@/types/opportunity";


export default function MyOpportunitiesPage(){


    const [
        opportunities,
        setOpportunities,
    ] = useState<Opportunity[]>([]);



    useEffect(()=>{

        const storedOpportunities =
            localStorage.getItem(
                "kaaryab_opportunities"
            );


        if(storedOpportunities){

            setOpportunities(
                JSON.parse(
                    storedOpportunities
                )
            );

        }


    },[]);



    return (

        <main className="space-y-8">

            <section className="flex flex-col justify-between gap-5 rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 p-8 text-white shadow-xl md:flex-row md:items-center">

                <div>

                    <h1 className="text-3xl font-extrabold">
                        My Opportunities
                    </h1>


                    <p className="mt-2 max-w-xl text-sm text-white/80">
                        Manage opportunities you created, edit information, and track your shared opportunities.
                    </p>

                </div>


                <Link
                    href="/dashboard/add-opportunity"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-100"
                >

                    <PlusCircle size={18}/>

                    Add Opportunity

                </Link>

            </section>




            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


                    <div>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            Created Opportunities
                        </h2>


                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                            You have created {opportunities.length} opportunities.

                        </p>


                    </div>


                </div>


            </section>




            {
                opportunities.length === 0

                ?

                (

                    <EmptyState/>

                )

                :

                (

                    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {
                            opportunities.map(
                                (opportunity)=>(

                                    <MyOpportunityCard
                                        key={opportunity.id}
                                        opportunity={opportunity}
                                        onDelete={(id)=>{
                                            setOpportunities(prev =>
                                                prev.filter(item=>item.id !== id)
                                            );
                                        }}
                                    />
                                )
                            )
                        }

                    </section>

                )

            }


        </main>

    );

}