"use client";

import {
    Bookmark,
    BriefcaseBusiness,
    PlusCircle,
    Clock,
} from "lucide-react";

import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";

import OpportunityChart from "@/components/dashboard/OpportunityChart";
import SubmissionChart from "@/components/dashboard/SubmissionChart";
import RecentSubmissions from "@/components/dashboard/RecentSubmissions";


export default function UserDashboardPage() {
    const {
        user,
    } = useAuth();

    return (

        <main className="space-y-8">

            <section className="rounded-3xl bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 p-8 text-white shadow-xl">

                <p className="text-sm text-white/70">
                    Welcome back
                </p>

                <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                    {user?.name ?? "User"}
                </h1>

                <p className="mt-4 max-w-2xl text-white/80">
                    Manage your saved opportunities, explore new opportunities,
                    and track your activities.
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <DashboardCard
                    icon={<Bookmark size={22}/>}
                    title="Saved Opportunities"
                    value="0"
                />


                <DashboardCard
                    icon={<BriefcaseBusiness size={22}/>}
                    title="Submitted Opportunities"
                    value="0"
                />


                <DashboardCard
                    icon={<Clock size={22}/>}
                    title="Expiring Soon"
                    value="0"
                />


            </section>

            <section className="grid gap-6 md:grid-cols-2">


                <Link
                    href="/saved"
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                >

                    <Bookmark className="text-sky-600"/>


                    <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                        Saved Opportunities
                    </h2>


                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        View opportunities you saved and apply later.
                    </p>


                </Link>

                <Link
                    href="/dashboard/add-opportunity"
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                >

                    <PlusCircle className="text-green-600"/>


                    <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                        Add Opportunity
                    </h2>


                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Share a new opportunity with Afghan youth.
                    </p>


                </Link>


            </section>

            <RecentSubmissions />

            <section className="grid gap-8 xl:grid-cols-2">
                <OpportunityChart />
                <SubmissionChart />
            </section>
        </main>

    );

}






function DashboardCard({
    icon,
    title,
    value,
}:{
    icon:React.ReactNode;
    title:string;
    value:string;
}){


    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">


            <div className="flex items-center justify-between">


                <div className="rounded-xl bg-sky-100 p-3 text-sky-600 dark:bg-sky-950">

                    {icon}

                </div>


                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {value}
                </span>


            </div>



            <h3 className="mt-5 font-semibold text-slate-700 dark:text-slate-300">
                {title}
            </h3>



        </div>

    );

}