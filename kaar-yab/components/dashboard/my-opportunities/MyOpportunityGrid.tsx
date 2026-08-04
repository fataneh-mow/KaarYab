"use client";

import {
    useMemo,
} from "react";

import {
    useAppSelector,
} from "@/hooks/redux";

import {
    useAuth,
} from "@/hooks/useAuth";

import {
    selectFilteredOpportunities,
} from "@/selectors/opportunitySelectors";

import MyOpportunityCard from "./MyOpportunityCard";
import EmptyState from "./EmptyState";


export default function MyOpportunityGrid(){

    const {
        user,
    } = useAuth();


    const opportunities = useAppSelector(
        selectFilteredOpportunities
    );

    const myOpportunities = useMemo(()=>{

        if(!user){
            return [];
        }

        return opportunities.filter(
            opportunity =>
                opportunity.createdBy === user.id
        );

    },[
        opportunities,
        user,
    ]);

    if(myOpportunities.length === 0){
        return (
            <EmptyState />
        );
    }

    return (

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {
                myOpportunities.map(
                    opportunity => (

                        <MyOpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                        />

                    )
                )
            }
        </section>
    );
}