"use client";

import {
    useParams,
    useRouter,
} from "next/navigation";

import {
    useEffect,
    useState,
} from "react";

import OpportunityForm from "@/components/oportunities/OpportunityForm";

import {
    Opportunity,
} from "@/types/opportunity";


export default function EditOpportunityPage(){

    const params = useParams();

    const router = useRouter();


    const [opportunity,setOpportunity] = useState<Opportunity | null>(null);



    useEffect(()=>{

        const data =
            JSON.parse(
                localStorage.getItem("kaaryab_opportunities") || "[]"
            );


        const found =
            data.find(
                (item:Opportunity)=>
                    item.id === params.id
            );


        if(!found){

            router.push("/dashboard/my-opportunities");

            return;

        }


        setOpportunity(found);


    },[
        params.id,
        router,
    ]);



    if(!opportunity){

        return null;

    }



    return (

        <main className="mx-auto max-w-5xl py-10">

            <OpportunityForm
                mode="edit"
                initialData={opportunity}
            />

        </main>

    );

}