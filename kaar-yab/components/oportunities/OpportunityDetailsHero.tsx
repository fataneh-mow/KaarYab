"use client";

import {
    MapPin,
    CalendarDays,
    BriefcaseBusiness,
    Building2,
    ArrowLeft,
} from "lucide-react";

import { useRouter } from "next/navigation";

import type { Opportunity } from "@/types/opportunity";


interface Props {
    opportunity: Opportunity;
}


export default function OpportunityDetailsHero({
    opportunity,
}: Props) {

    const router = useRouter();


    return (

        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 py-35 text-white"
        >

            <div
                className="absolute inset-0 bg-indigo-950/30"
            />


            <div
                className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >

                <div
                    className="max-w-4xl"
                >

                    <div className="flex items-center justify-start gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                        >
                            <ArrowLeft size={20} />
                        </button>



                        <span
                            className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur"
                        >
                            {opportunity.category}
                        </span>
                    </div>
                    



                    <h1
                        className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
                    >
                        {opportunity.title}
                    </h1>



                    <div
                        className="mt-5 flex items-center gap-2 text-lg text-white/90"
                    >

                        <Building2 size={22} />

                        {opportunity.organization}

                    </div>



                    <p
                        className="mt-6 max-w-3xl text-lg leading-8 text-white/90"
                    >
                        {opportunity.description}
                    </p>




                    <div
                        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        <InfoItem
                            icon={<MapPin size={20} />}
                            label="Location"
                            value={opportunity.location}
                        />


                        <InfoItem
                            icon={<BriefcaseBusiness size={20} />}
                            label="Type"
                            value={opportunity.type}
                        />


                        <InfoItem
                            icon={<CalendarDays size={20} />}
                            label="Deadline"
                            value={opportunity.deadline}
                        />


                        <InfoItem
                            icon={<Building2 size={20} />}
                            label="Category"
                            value={opportunity.category}
                        />

                    </div>


                </div>

            </div>

        </section>

    );
}



function InfoItem({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {

    return (

        <div
            className="rounded-2xl bg-white/15 p-4 backdrop-blur-md"
        >

            <div
                className="flex items-center gap-2 text-white/80"
            >

                {icon}

                <span
                    className="text-sm"
                >
                    {label}
                </span>

            </div>



            <p
                className="mt-2 font-semibold"
            >
                {value}
            </p>


        </div>

    );
}