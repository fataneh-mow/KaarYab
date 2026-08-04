"use client";

import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    useRouter,
} from "next/navigation";

import {
    v4 as uuid,
} from "uuid";

import toast from "react-hot-toast";

import {
    BriefcaseBusiness,
    FileText,
    Link,
} from "lucide-react";
import {
    Input,
    Button,
} from "@/components/common";
import {
    opportunitySchema,
    OpportunityFormData,
} from "@/lib/validations/opportunitySchema";
import {
    saveOpportunity,
    updateOpportunity,
} from "@/lib/opportunityStorage";
import {
    useAuth,
} from "@/hooks/useAuth";
import {
    Opportunity,
} from "@/types/opportunity";
import { useEffect } from "react";
export default function OpportunityForm({
    mode = "add",
    initialData,
}:{
    mode?: "add" | "edit";
    initialData?: Opportunity;
}){
    const router = useRouter();

    const {
        user,
    } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors,
            isSubmitting,
        }
    } = useForm<OpportunityFormData>({
        resolver:zodResolver(opportunitySchema),
        defaultValues:{
            title:"",
            organization:"",
            category:"",
            location:"",
            type:"",
            deadline:"",
            description:"",
            requirements:"",
            applyLink:"",
            tags:"",
        },
    });
    useEffect(() => {
        if(initialData){
            reset({
                title:initialData.title,
                organization:initialData.organization,
                category:initialData.category,
                location:initialData.location,
                type:initialData.type,
                deadline:initialData.deadline,
                description:initialData.description,
                requirements:Array.isArray(initialData.requirements)
                    ? initialData.requirements.join(", ")
                    : initialData.requirements,
                applyLink:initialData.applyLink,
                tags:Array.isArray(initialData.tags)
                    ? initialData.tags.join(", ")
                    : initialData.tags,

            });

        }
    },[
        initialData,
        reset,
    ]);

    const onSubmit = async(
        data:OpportunityFormData
    )=>{
        if(!user){

            toast.error(
                "Please login first"
            );

            router.push("/login");

            return;

        }
        const opportunity = {
            title:data.title,
            organization:data.organization,
            category:data.category,
            location:data.location,
            type:data.type,
            deadline:data.deadline,
            description:data.description,
            requirements:data.requirements
                .split(",")
                .map(item=>item.trim()),

            applyLink:data.applyLink,
            tags:data.tags
                .split(",")
                .map(item=>item.trim()),
        };

        if(mode === "edit" && initialData){
            updateOpportunity({

                ...initialData,

                ...opportunity,

            });
            toast.success(
                "Opportunity updated successfully!"
            );
        }
        else{
            saveOpportunity({
                id:uuid(),
                ...opportunity,
                createdBy:user.id,
                createdAt:new Date().toISOString(),
            });
            toast.success(
                "Opportunity added successfully!"
            );
        }
        reset();
        router.push(
            "/dashboard/my-opportunities"
        );
    };
    return (
        <div className="mx-auto max-w-5xl space-y-8 py-10">
            <section className="rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 p-8 text-white shadow-xl">
                <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

                        <BriefcaseBusiness size={32}/>

                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">
                            {
                                mode === "edit"
                                ? "Edit Opportunity"
                                : "Add Opportunity"
                            }
                        </h1>
                        <p className="mt-2 text-sm text-white/80">

                            {
                                mode === "edit"
                                ? "Update your opportunity information."
                                : "Share jobs, internships, scholarships and learning opportunities."
                            }
                        </p>
                    </div>
                </div>
            </section>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                        Basic Information
                    </h2>

                    <div className="grid gap-5 md:grid-cols-2">

                        <Field error={errors.title?.message}>
                            <Input
                                placeholder="Opportunity title"
                                {...register("title")}
                            />
                        </Field>

                        <Field error={errors.organization?.message}>
                            <Input
                                placeholder="Organization"
                                {...register("organization")}
                            />
                        </Field>

                        <Field error={errors.category?.message}>
                            <select
                                {...register("category")}
                                className="h-11 w-full rounded-xl border border-slate-200 px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            >

                                <option value="">
                                    Select category
                                </option>

                                <option value="job">
                                    Job
                                </option>

                                <option value="internship">
                                    Internship
                                </option>

                                <option value="scholarship">
                                    Scholarship
                                </option>

                                <option value="course">
                                    Course
                                </option>

                            </select>
                        </Field>

                        <Field error={errors.location?.message}>
                            <Input
                                placeholder="Location"
                                {...register("location")}
                            />
                        </Field>
                        <Field error={errors.type?.message}>
                            <select
                                {...register("type")}
                                className="h-11 w-full rounded-xl border border-slate-200 px-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            >

                                <option value="">
                                    Select type
                                </option>

                                <option value="remote">
                                    Remote
                                </option>

                                <option value="onsite">
                                    On-site
                                </option>

                                <option value="hybrid">
                                    Hybrid
                                </option>

                            </select>
                        </Field>
                        <Field error={errors.deadline?.message}>
                            <Input
                                type="date"
                                {...register("deadline")}
                            />
                        </Field>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <div className="mb-6 flex items-center gap-3">

                        <FileText className="text-sky-600"/>

                        <h2 className="text-xl font-bold dark:text-white">
                            Details
                        </h2>

                    </div>

                    <Field error={errors.description?.message}>

                        <textarea
                            {...register("description")}
                            placeholder="Description"
                            className="min-h-40 w-full rounded-2xl border p-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />

                    </Field>
                    <Field error={errors.requirements?.message}>

                        <Input
                            placeholder="Requirements separated by commas"
                            {...register("requirements")}
                        />

                    </Field>

                </section>

                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <div className="mb-6 flex items-center gap-3">

                        <Link className="text-green-600"/>

                        <h2 className="text-xl font-bold dark:text-white">
                            Application
                        </h2>

                    </div>
                    <Field error={errors.applyLink?.message}>

                        <Input
                            placeholder="Application link"
                            {...register("applyLink")}
                        />

                    </Field>
                    <Field error={errors.tags?.message}>

                        <Input
                            placeholder="Tags"
                            {...register("tags")}
                        />

                    </Field>
                </section>

                <Button
                    type="submit"
                    className="w-full"
                >
                    {
                        isSubmitting
                        ? "Saving..."
                        : mode === "edit"
                        ? "Update Opportunity"
                        : "Publish Opportunity"
                    }
                </Button>
            </form>
        </div>

    );

}

function Field({
    children,
    error,
}:{
    children:React.ReactNode;
    error?:string;
}){
    return (

        <div className="space-y-2">
            {children}
            {
                error && (
                    <p className="text-sm text-red-500">
                        {error}
                    </p>
               )
            }
        </div>
    );
}