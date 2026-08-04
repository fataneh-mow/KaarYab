import { Opportunity } from "@/types/opportunity";
import { getStoredOpportunities } from "@/lib/opportunityStorage";
import {
    saveStoredOpportunity,
    updateStoredOpportunity,
    deleteStoredOpportunity,
} from "@/lib/opportunityStorage";

const delay = (ms:number)=>
    new Promise(
        resolve=>setTimeout(resolve,ms)
    );


export async function getOpportunities():Promise<Opportunity[]>{


    await delay(2000);


    const response =
        await fetch(
            "/api/opportunities",
            {
                cache:"no-store",
            }
        );


    if(!response.ok){

        throw new Error(
            "Failed to fetch opportunities"
        );

    }


    const apiOpportunities:Opportunity[] =
        await response.json();



    let storedOpportunities:Opportunity[] = [];


    if(typeof window !== "undefined"){

        storedOpportunities =
            getStoredOpportunities();

    }



    console.log(
        "LOCAL STORAGE:",
        storedOpportunities
    );


    console.log(
        "API:",
        apiOpportunities
    );



    return [
        ...storedOpportunities,
        ...apiOpportunities,
    ];

}


export async function getOpportunityById(
    id:string
):Promise<Opportunity>{


    const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL ||
        "http://localhost:3000";



    const response =
        await fetch(
            `${baseUrl}/api/opportunities/${id}`,
            {
                cache:"no-store",
            }
        );



    if(!response.ok){

        throw new Error(
            "Opportunity not found"
        );

    }



    return response.json();

}

// CREATE OPPORTUNITY
export async function createOpportunity(
    opportunity: Omit<Opportunity,"id" | "createdAt">
):Promise<Opportunity>{


    const response =
        await fetch(
            "/api/opportunities",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:
                    JSON.stringify(opportunity),
            }
        );


    if(!response.ok){
        throw new Error(
            "Failed to create opportunity"
        );
    }


    const created =
        await response.json();



    saveStoredOpportunity(created);



    return created;

}


// DELETE OPPORTUNITY
export async function deleteOpportunity(
    id:string
):Promise<{message:string}> {


    const response =
        await fetch(
            `/api/opportunities/${id}`,
            {
                method:"DELETE",
            }
        );


    if(!response.ok){

        throw new Error(
            "Failed to delete opportunity"
        );

    }

    deleteStoredOpportunity(id);

    return response.json();

}


export async function updateOpportunityById(
    id:string,
    opportunity:Partial<Opportunity>
):Promise<Opportunity>{


    const response =
        await fetch(
            `/api/opportunities/${id}`,
            {
                method:"PUT",

                headers:{
                    "Content-Type":"application/json",
                },

                body:
                    JSON.stringify(opportunity),
            }
        );


    if(!response.ok){

        throw new Error(
            "Failed to update opportunity"
        );

    }


    const updated =
        await response.json();



    updateStoredOpportunity(updated);



    return updated;


}

