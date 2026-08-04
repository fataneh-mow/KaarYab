import { NextResponse } from "next/server";

import { opportunities } from "@/data/opportunities";


// GET ALL OPPORTUNITIES
export async function GET(){

    return NextResponse.json(
        opportunities,
        {
            status:200,
        }
    );

}



// CREATE NEW OPPORTUNITY
export async function POST(
    request:Request
){

    try{

        const body = await request.json();


        const newOpportunity = {
            id: crypto.randomUUID(),
            ...body,
            createdAt:new Date().toISOString(),
        };


        // later replace this with database/local storage
        opportunities.push(
            newOpportunity
        );


        return NextResponse.json(
            newOpportunity,
            {
                status:201,
            }
        );


    }catch(error){

        return NextResponse.json(
            {
                message:"Failed to create opportunity",
            },
            {
                status:500,
            }
        );

    }

}