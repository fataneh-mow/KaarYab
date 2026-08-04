import { NextResponse } from "next/server";

import { opportunities } from "@/data/opportunities";



export async function GET(
    request:Request,
    {
        params,
    }:{
        params:{
            id:string;
        }
    }
){

    const opportunity =
        opportunities.find(
            opportunity =>
                opportunity.id === params.id
        );


    if(!opportunity){

        return NextResponse.json(
            {
                message:"Opportunity not found",
            },
            {
                status:404,
            }
        );

    }


    return NextResponse.json(
        opportunity,
        {
            status:200,
        }
    );

}