import { NextRequest, NextResponse } from "next/server";

import { opportunities } from "@/data/opportunities";


export async function GET(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{
            id: string;
        }>;
    }
) {

    try {

        const {
            id,
        } = await params;


        console.log("Requested ID:", id);


        const opportunity =
            opportunities.find(
                opportunity =>
                    opportunity.id === id
            );


        if (!opportunity) {

            return NextResponse.json(
                {
                    message: "Opportunity not found",
                },
                {
                    status: 404,
                }
            );

        }


        return NextResponse.json(
            opportunity,
            {
                status: 200,
            }
        );


    } catch (error) {

        console.error(error);


        return NextResponse.json(
            {
                message:
                    "Failed to fetch opportunity",
            },
            {
                status: 500,
            }
        );

    }

}


export async function POST(
    request: NextRequest
) {

    try {

        const body = await request.json();


        const newOpportunity = {
            id: crypto.randomUUID(),

            ...body,

            createdAt:
                new Date().toISOString(),

        };


        opportunities.push(
            newOpportunity
        );



        return NextResponse.json(
            newOpportunity,
            {
                status:201
            }
        );


    } catch(error){


        return NextResponse.json(
            {
                message:
                "Failed to create opportunity"
            },
            {
                status:500
            }
        );

    }

}

export async function PUT(
    request:NextRequest,
    {
        params
    }:{
        params:Promise<{
            id:string
        }>
    }
){

    try{


        const {
            id
        } = await params;



        const body =
            await request.json();



        const index =
            opportunities.findIndex(
                opportunity =>
                    opportunity.id === id
            );



        if(index === -1){

            return NextResponse.json(
                {
                    message:
                    "Opportunity not found"
                },
                {
                    status:404
                }
            );

        }



        opportunities[index] = {

            ...opportunities[index],

            ...body,

            updatedAt:
                new Date().toISOString()

        };



        return NextResponse.json(
            opportunities[index]
        );


    }catch(error){


        return NextResponse.json(
            {
                message:
                "Failed to update opportunity"
            },
            {
                status:500
            }
        );

    }

}

export async function DELETE(
    request:Request,
    {
        params
    }:{
        params:Promise<{
            id:string
        }>
    }
){


    try{


        const {
            id
        } = await params;



        const index =
            opportunities.findIndex(
                opportunity =>
                    opportunity.id === id
            );



        if(index === -1){

            return NextResponse.json(
                {
                    message:
                    "Opportunity not found"
                },
                {
                    status:404
                }
            );

        }



        const deleted =
            opportunities.splice(
                index,
                1
            );



        return NextResponse.json(
            {
                message:
                "Opportunity deleted",
                opportunity:
                    deleted[0]
            }
        );


    }catch(error){


        return NextResponse.json(
            {
                message:
                "Failed to delete opportunity"
            },
            {
                status:500
            }
        );

    }

}