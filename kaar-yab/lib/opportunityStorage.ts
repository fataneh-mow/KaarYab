import { opportunities as defaultOpportunities } from "@/data/opportunities";
import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab_opportunities";


export function saveOpportunity(
    opportunity:Opportunity
){

    const existing =
        getStoredOpportunities();


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
            opportunity,
            ...existing,
        ])
    );

}



export function getStoredOpportunities(): Opportunity[] {

    if(typeof window === "undefined"){
        return [];
    }


    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

}




export function getOpportunities():Opportunity[]{

    return [
        ...getStoredOpportunities(),
        ...defaultOpportunities,
    ];

}





export function updateOpportunity(
    updatedOpportunity:Opportunity
){

    const opportunities =
        getStoredOpportunities();



    const updated =
        opportunities.map(
            opportunity =>
                opportunity.id === updatedOpportunity.id
                ? updatedOpportunity
                : opportunity
        );



    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    );

}




export function deleteOpportunity(
    opportunityId:string
){

    const opportunities =
        getStoredOpportunities();



    const filtered =
        opportunities.filter(
            opportunity =>
                opportunity.id !== opportunityId
        );



    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(filtered)
    );

}

export function saveStoredOpportunity(
    opportunity: Opportunity
){

    const existing =
        getStoredOpportunities();


    const updated = [
        opportunity,
        ...existing.filter(
            item => item.id !== opportunity.id
        )
    ];


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    );

}

export function updateStoredOpportunity(
    opportunity: Opportunity
){

    const existing =
        getStoredOpportunities();


    const updated =
        existing.map(
            item =>
            item.id === opportunity.id
            ? opportunity
            : item
        );


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    );

}

export function deleteStoredOpportunity(
    id: string
) {

    const existing =
        getStoredOpportunities();


    console.log("DELETE ID:", id);

    console.log(
        "BEFORE DELETE:",
        existing
    );


    const updated =
        existing.filter(
            item =>
                item.id !== id
        );


    console.log(
        "AFTER DELETE:",
        updated
    );


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    );

}