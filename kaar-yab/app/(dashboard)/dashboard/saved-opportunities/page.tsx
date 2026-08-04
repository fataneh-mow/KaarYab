"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    Bookmark,
} from "lucide-react";

import OpportunityCard from "@/components/oportunities/OpportunityCard";

import {
    getSavedOpportunities,
} from "@/lib/savedOpportunityStorage";

import {
    Opportunity,
} from "@/types/opportunity";


export default function SavedOpportunitiesPage(){

    const [opportunities,setOpportunities] = useState<Opportunity[]>([]);


    useEffect(()=>{

        setOpportunities(
            getSavedOpportunities()
        );

    },[]);



    return (

        <main className="space-y-8">


            <section className="rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 p-8 text-white shadow-xl">


                <div className="flex items-center gap-4">


                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

                        <Bookmark size={28}/>

                    </div>



                    <div>

                        <h1 className="text-3xl font-extrabold">
                            Saved Opportunities
                        </h1>


                        <p className="mt-2 text-sm text-white/80">
                            View opportunities you saved for later.
                        </p>

                    </div>


                </div>


            </section>





            {
                opportunities.length === 0 ? (

                    <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">


                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            No saved opportunities
                        </h2>


                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Save opportunities from the opportunities page and they will appear here.
                        </p>


                    </section>


                ) : (


                    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">


                        {
                            opportunities.map((opportunity)=>(

                                <OpportunityCard
                                    key={opportunity.id}
                                    opportunity={opportunity}
                                />

                            ))
                        }


                    </section>


                )
            }


        </main>

    );

}