"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOpportunities } from "@/lib/opportunityStorage";
import { loadStoredOpportunities } from "@/store/slices/opportunitySlice";

export default function OpportunityLoader(){

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(
            loadStoredOpportunities(
                getOpportunities()
            )
        );

    },[dispatch]);

    return null;

}