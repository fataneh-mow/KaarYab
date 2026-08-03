"use client";

import OpportunityCard from "./OpportunityCard";

import { useAppSelector } from "@/hooks/redux";
import { selectFilteredOpportunities } from "@/selectors/opportunitySelectors";

export default function OpportunityGrid() {

    const opportunities = useAppSelector(
        selectFilteredOpportunities
    );


    return (
        <section className="py-16">

            <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">

                {
                    opportunities.map((opportunity) => (
                        <OpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                        />
                    ))
                }

            </div>

        </section>
    );
}