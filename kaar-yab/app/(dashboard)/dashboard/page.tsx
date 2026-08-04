"use client";

import {
    Bookmark,
    BriefcaseBusiness,
    PlusCircle,
    Clock,
} from "lucide-react";

import Link from "next/link";

import {
    useEffect,
    useState,
} from "react";

import { useAuth } from "@/hooks/useAuth";

import {
    getSavedOpportunities,
} from "@/lib/savedOpportunityStorage";

import {
    getOpportunities,
} from "@/lib/opportunityStorage";

import OpportunityChart from "@/components/dashboard/OpportunityChart";
import SubmissionChart from "@/components/dashboard/SubmissionChart";
import RecentSubmissions from "@/components/dashboard/RecentSubmissions";


export default function UserDashboardPage() {

    const {
        user,
    } = useAuth();

    const [savedCount,setSavedCount] = useState(0);
    const [totalOpportunities,setTotalOpportunities] = useState(0);
    const [jobsCount,setJobsCount] = useState(0);
    const [scholarshipsCount,setScholarshipsCount] = useState(0);
    const [remoteCount,setRemoteCount] = useState(0);
    const [expiringCount,setExpiringCount] = useState(0);
    const [recentSubmissionCount,setRecentSubmissionCount] = useState(0);

    useEffect(()=>{

        const opportunities = getOpportunities();

        const saved = getSavedOpportunities();


        setSavedCount(
            saved.length
        );


        setTotalOpportunities(
            opportunities.length
        );


        setJobsCount(
            opportunities.filter(
                opportunity =>
                    opportunity.category.toLowerCase() === "job"
            ).length
        );


        setScholarshipsCount(
            opportunities.filter(
                opportunity =>
                    opportunity.category.toLowerCase() === "scholarship"
            ).length
        );


        setRemoteCount(
            opportunities.filter(
                opportunity =>
                    opportunity.type.toLowerCase() === "remote"
            ).length
        );


        const today = new Date();


        const expiring = opportunities.filter(
            opportunity=>{

                const deadline =
                    new Date(opportunity.deadline);


                const difference =
                    deadline.getTime() - today.getTime();


                const days =
                    difference /
                    (1000 * 60 * 60 * 24);


                return days <= 1 && days >= 0;

            }
        );


        setExpiringCount(
            expiring.length
        );

        const recent =
            opportunities
                .filter(
                    opportunity => opportunity.createdAt
                )
                .sort(
                    (a,b)=>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                )
                .slice(0,5);


        setRecentSubmissionCount(
            recent.length
        );
    },[]);



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
                    icon={<BriefcaseBusiness size={22}/>}
                    title="Total Opportunities"
                    value={String(totalOpportunities)}
                />
                <DashboardCard
                    icon={<BriefcaseBusiness size={22}/>}
                    title="Jobs"
                    value={String(jobsCount)}
                />
                <DashboardCard
                    icon={<Bookmark size={22}/>}
                    title="Scholarships"
                    value={String(scholarshipsCount)}
                />
                <DashboardCard
                    icon={<BriefcaseBusiness size={22}/>}
                    title="Remote Opportunities"
                    value={String(remoteCount)}
                />
                <DashboardCard
                    icon={<Clock size={22}/>}
                    title="Expiring Soon"
                    value={String(expiringCount)}
                />
                <DashboardCard
                    icon={<Bookmark size={22}/>}
                    title="Saved Opportunities"
                    value={String(savedCount)}
                />
                <DashboardCard
                    icon={<PlusCircle size={22}/>}
                    title="Recent Submissions"
                    value={String(recentSubmissionCount)}
                />
            </section>

            <section className="grid gap-6 md:grid-cols-2">



                <Link
                    href="/dashboard/saved-opportunities"
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