"use client";


import {
    useEffect,
    useState,
} from "react";


import {
    getSavedOpportunities,
    clearSavedOpportunities,
} from "@/lib/savedOpportunityStorage";


import {
    Opportunity,
} from "@/types/opportunity";


import SavedToolbar from "@/components/oportunities/SavedToolbar";
import EmptyState from "@/components/dashboard/my-opportunities/EmptyState";
import toast from "react-hot-toast";
import SavedOpportunityCard from "@/components/oportunities/SavedOpportunityCard";

export default function SavedPage(){
    const [
        opportunities,
        setOpportunities,
    ] = useState<Opportunity[]>([]);

    useEffect(()=>{
        setOpportunities(
            getSavedOpportunities()
        );
    },[]);

    const handleRemove = ()=>{
        setOpportunities(
            getSavedOpportunities()
        );
    };

    const handleClear = ()=>{
        clearSavedOpportunities();
        setOpportunities([]);
        toast.success(
            "All saved opportunities cleared"
        );
    };

    return (
        <main className="w-full space-y-8 px-6 py-10 lg:px-10">
            <section className="rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 p-8 text-white shadow-xl">
                <h1 className="text-3xl font-extrabold">
                    My Saved Opportunities
                </h1>
                <p className="mt-3 text-white/80">
                    Save opportunities and come back later when you are ready to apply.
                </p>
            </section>

            <SavedToolbar
                count={opportunities.length}
                onClear={handleClear}
            />

            {
                opportunities.length === 0 ? (

                    <EmptyState/>

                ) : (

                    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {
                            opportunities.map(
                                opportunity=>(

                                    <SavedOpportunityCard
                                        key={opportunity.id}
                                        opportunity={opportunity}
                                        onRemove={handleRemove}
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