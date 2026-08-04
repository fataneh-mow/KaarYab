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
    Building2,
    MapPin,
    CalendarDays,
    Tag,
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
} from "@/lib/opportunityStorage";

import {
    useAuth,
} from "@/hooks/useAuth";


export default function OpportunityForm(){

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
        },
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



        saveOpportunity({

            id:uuid(),

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

            createdBy:user.id,

            createdAt:new Date()
                .toISOString(),

        });



        reset();


        toast.success(
            "Opportunity added successfully!"
        );


        router.push(
            "/dashboard"
        );

    };



    return (

        <div
            className="mx-auto max-w-5xl space-y-8 py-10"
        >


            <section
                className="rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 p-8 text-white shadow-xl"
            >

                <div
                    className="flex items-center gap-5"
                >

                    <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20"
                    >

                        <BriefcaseBusiness size={32}/>

                    </div>


                    <div>

                        <h1
                            className="text-3xl font-extrabold sm:text-4xl"
                        >
                            Add Opportunity
                        </h1>


                        <p
                            className="mt-2 max-w-xl text-sm text-white/80"
                        >
                            Share jobs, internships, scholarships and learning opportunities.
                        </p>

                    </div>

                </div>


            </section>




            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >


                <section
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >

                    <SectionTitle
                        icon={<Building2 size={22}/>}
                        title="Basic Information"
                        description="Add the main information about this opportunity."
                    />


                    <div
                        className="grid gap-6 md:grid-cols-2"
                    >


                        <Field
                            label="Title"
                            error={errors.title?.message}
                        >

                            <Input
                                placeholder="Frontend Developer Internship"
                                {...register("title")}
                            />

                        </Field>




                        <Field
                            label="Organization"
                            error={errors.organization?.message}
                        >

                            <Input
                                placeholder="Organization name"
                                {...register("organization")}
                            />

                        </Field>





                        <Field
                            label="Category"
                            error={errors.category?.message}
                        >

                            <Select
                                {...register("category")}
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

                                <option value="volunteer">
                                    Volunteer
                                </option>

                            </Select>


                        </Field>





                        <Field
                            label="Opportunity Type"
                            error={errors.type?.message}
                        >

                            <Select
                                {...register("type")}
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

                            </Select>


                        </Field>





                        <Field
                            label="Location"
                            error={errors.location?.message}
                        >

                            <div
                                className="relative"
                            >

                                <MapPin
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />


                                <Input
                                    className="pl-10"
                                    placeholder="Herat, Kabul..."
                                    {...register("location")}
                                />

                            </div>


                        </Field>





                        <Field
                            label="Deadline"
                            error={errors.deadline?.message}
                        >

                            <div
                                className="relative"
                            >

                                <CalendarDays
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />


                                <Input
                                    type="date"
                                    className="pl-10"
                                    {...register("deadline")}
                                />

                            </div>


                        </Field>


                    </div>


                </section>





                <section
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >

                    <SectionTitle
                        icon={<FileText size={22}/>}
                        title="Opportunity Details"
                        description="Explain the opportunity and requirements."
                    />


                    <Field
                        label="Description"
                        error={errors.description?.message}
                    >

                        <textarea
                            {...register("description")}
                            placeholder="Describe the opportunity..."
                            className="min-h-44 w-full rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />


                    </Field>




                    <div
                        className="mt-6"
                    >

                        <Field
                            label="Requirements"
                            error={errors.requirements?.message}
                        >

                            <Input
                                placeholder="React, English, Communication"
                                {...register("requirements")}
                            />


                        </Field>


                    </div>


                </section>





                <section
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >

                    <SectionTitle
                        icon={<Link size={22}/>}
                        title="Application"
                        description="Add application details and tags."
                    />


                    <Field
                        label="Application Link"
                        error={errors.applyLink?.message}
                    >

                        <Input
                            placeholder="https://example.com"
                            {...register("applyLink")}
                        />


                    </Field>




                    <div
                        className="mt-6"
                    >

                        <Field
                            label="Tags"
                            error={errors.tags?.message}
                        >

                            <div
                                className="relative"
                            >

                                <Tag
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />


                                <Input
                                    className="pl-10"
                                    placeholder="React, Remote, Beginner"
                                    {...register("tags")}
                                />


                            </div>


                        </Field>


                    </div>


                </section>




                <Button
                    type="submit"
                    className="w-full"
                >

                    {
                        isSubmitting
                        ? "Publishing..."
                        : "Publish Opportunity"
                    }

                </Button>


            </form>


        </div>

    );

}





function SectionTitle({
    icon,
    title,
    description,
}:{
    icon:React.ReactNode;
    title:string;
    description:string;
}){

    return (

        <div
            className="mb-7 flex items-center gap-3"
        >

            <div
                className="rounded-xl bg-sky-100 p-3 text-sky-600 dark:bg-sky-950"
            >

                {icon}

            </div>


            <div>

                <h2
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >
                    {title}
                </h2>


                <p
                    className="text-sm text-slate-500 dark:text-slate-400"
                >
                    {description}
                </p>

            </div>


        </div>

    );

}





function Field({
    children,
    label,
    error,
}:{
    children:React.ReactNode;
    label:string;
    error?:string;
}){

    return (

        <div
            className="space-y-2"
        >

            <label
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
                {label}
            </label>


            {children}


            {
                error && (
                    <p
                        className="text-sm text-red-500"
                    >
                        {error}
                    </p>
                )
            }


        </div>

    );

}





function Select({
    children,
    ...props
}:React.SelectHTMLAttributes<HTMLSelectElement>){

    return (

        <select
            {...props}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        >

            {children}

        </select>

    );

}