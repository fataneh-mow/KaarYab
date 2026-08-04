import { Opportunity } from "@/types/opportunity";

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function getOpportunities(): Promise<Opportunity[]> {

    await delay(2000);

    const response = await fetch(
        "/api/opportunities",
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch opportunities"
        );
    }

    return response.json();

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