import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab_saved_opportunities";


export function getSavedOpportunities(): Opportunity[] {

    if(typeof window === "undefined"){
        return [];
    }


    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

}



export function saveOpportunity(
    opportunity:Opportunity
){

    const saved = getSavedOpportunities();


    const exists = saved.some(
        item => item.id === opportunity.id
    );


    if(exists){
        return;
    }


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
            opportunity,
            ...saved,
        ])
    );

}




export function removeSavedOpportunity(
    id:string
){

    const saved = getSavedOpportunities();


    const filtered =
        saved.filter(
            item => item.id !== id
        );


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(filtered)
    );

}



export function clearSavedOpportunities(){

    localStorage.removeItem(
        STORAGE_KEY
    );

}



export function isOpportunitySaved(
    id:string
){

    const saved =
        getSavedOpportunities();


    return saved.some(
        item=>item.id===id
    );

}