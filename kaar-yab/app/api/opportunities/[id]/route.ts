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