"use client";

import {
    Trash2,
} from "lucide-react";

import Button from "@/components/common/Button";


export default function SavedToolbar({
    count,
    onClear,
}:{
    count:number;
    onClear:()=>void;
}){


    return (

        <section className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center dark:border-slate-800 dark:bg-slate-950">


            <div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Saved Opportunities
                </h2>


                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                    You have saved {count} opportunities.

                </p>


            </div>



            {
                count > 0 && (

                    <Button
                        variant="danger"
                        onClick={onClear}
                    >

                        <Trash2 size={17}/>

                        Clear All

                    </Button>

                )
            }


        </section>

    );

}