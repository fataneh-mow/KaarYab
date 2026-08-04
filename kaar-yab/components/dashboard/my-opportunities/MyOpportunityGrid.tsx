"use client";

import {
    useMemo,
} from "react";

import {
    useAppSelector,
    useAppDispatch,
} from "@/hooks/redux";

import {
    useAuth,
} from "@/hooks/useAuth";

import {
    selectFilteredOpportunities,
} from "@/selectors/opportunitySelectors";

import MyOpportunityCard from "./MyOpportunityCard";
import EmptyState from "./EmptyState";

import {
    deleteOpportunity,
} from "@/store/slices/opportunitySlice";

export default function MyOpportunityGrid(){
    const dispatch = useAppDispatch();

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

    const handleDelete = (id:string)=>{

        dispatch(
            deleteOpportunity(id)
        );

    };

    return (

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {
                myOpportunities.map(
                    opportunity => (

                        <MyOpportunityCard
                            key={opportunity.id}
                            opportunity={opportunity}
                            onDelete={handleDelete}
                        />

                    )
                )
            }
        </section>
    );
}