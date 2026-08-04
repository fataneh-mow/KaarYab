"use client";

import {
    CalendarDays,
    Edit,
    Trash2,
    MapPin,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import {
    Button,
    Modal,
} from "@/components/common";

import {
    Opportunity,
} from "@/types/opportunity";

import {
    deleteOpportunity,
} from "@/services/opportunityService";

export default function MyOpportunityCard({
    opportunity, onDelete
}:{
    opportunity:Opportunity;
    onDelete:(id:string)=>void;
}){

    const [isDeleteOpen,setIsDeleteOpen] = useState(false);

    const handleDelete = async () => {

        try {

            await deleteOpportunity(
                opportunity.id
            );


            onDelete(
                opportunity.id
            );


            toast.success(
                "Opportunity deleted successfully"
            );


            setIsDeleteOpen(false);


        } catch(error){

            console.error(error);


            toast.error(
                "Failed to delete opportunity"
            );

        }

    };

    return (
        <>
            <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {opportunity.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            {opportunity.organization}
                        </p>

                    </div>

                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                        {opportunity.category}
                    </span>

                </div>

                <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">

                        <MapPin size={16}/>

                        {opportunity.location}

                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">

                        <CalendarDays size={16}/>

                        Deadline:

                        <span className="font-medium">
                            {opportunity.deadline}
                        </span>

                    </div>

                </div>

                <p className="mt-5 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
                    {opportunity.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                        {opportunity.type}
                    </span>

                    <div className="flex gap-2">

                        <Link
                            href={`/dashboard/edit-opportunity/${opportunity.id}`}
                            className="rounded-xl p-2 text-sky-600 transition hover:bg-sky-100 dark:hover:bg-sky-950"
                        >
                            <Edit size={18}/>
                        </Link>

                        <button
                            onClick={()=>setIsDeleteOpen(true)}
                            className="rounded-xl p-2 text-red-600 transition hover:bg-red-100 dark:hover:bg-red-950"
                        >
                            <Trash2 size={18}/>
                        </button>

                    </div>

                </div>

            </article>

            <Modal
                open={isDeleteOpen}
                onClose={()=>setIsDeleteOpen(false)}
                title="Delete Opportunity"
            >

                <div className="space-y-6">

                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Are you sure you want to delete
                        <span className="font-semibold">
                            {" "}{opportunity.title}
                        </span>
                        ?
                        This action cannot be undone.
                    </p>

                    <div className="flex justify-end gap-3">

                        <Button
                            type="button"
                            variant="primary"
                            onClick={()=>setIsDeleteOpen(false)}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="button"
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Delete
                        </Button>

                    </div>

                </div>

            </Modal>

        </>
    );

}