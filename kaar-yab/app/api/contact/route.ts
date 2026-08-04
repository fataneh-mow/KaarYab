import { NextResponse } from "next/server";


export async function POST(
    request:Request
){

    try{

        const body = await request.json();


        const {
            name,
            email,
            message,
        } = body;


        if(!name || !email || !message){

            return NextResponse.json(
                {
                    message:"All fields are required"
                },
                {
                    status:400
                }
            );

        }


        console.log(
            "CONTACT MESSAGE:",
            {
                name,
                email,
                message
            }
        );


        return NextResponse.json(
            {
                message:"Message sent successfully"
            },
            {
                status:201
            }
        );


    }catch(error){

        return NextResponse.json(
            {
                message:"Something went wrong"
            },
            {
                status:500
            }
        );

    }

}