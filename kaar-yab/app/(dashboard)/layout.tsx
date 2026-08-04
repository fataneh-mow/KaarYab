"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

import {
    LayoutDashboard,
    Briefcase,
    Save,
    PlusCircle,
} from "lucide-react";

import {
    ThemeToggle,
    Button,
} from "@/components/common";

import {
    useAuth,
} from "@/hooks/useAuth";


export default function DashboardLayout({
    children,
}:{
    children:React.ReactNode;
}){
    const router = useRouter();
    const {
        user,
        isAuthenticated,
        logout,
    } = useAuth();
    useEffect(()=> {
        if(!isAuthenticated){
            router.replace("/login");
        }
    },[
        isAuthenticated,
        router,
    ]);
    const handleLogout = () => {
        logout();
        router.replace("/login");
    };
    if(!isAuthenticated){
        return null;
    }
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                            {
                                user?.name
                                ?.charAt(0)
                                .toUpperCase()
                            }
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                                KaarYab Dashboard
                            </h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {
                                    user
                                    ? `Welcome back, ${user.name}`
                                    : "Manage your opportunities"
                                }
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">

                        <ThemeToggle />

                        <Button
                            variant="danger"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
                <aside className="sticky top-28 hidden h-fit w-64 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:block dark:border-slate-800 dark:bg-slate-950">
                    <nav className="space-y-2">
                        <DashboardLink
                            href="/dashboard"
                            icon={LayoutDashboard}
                            label="Overview"
                        />
                        <DashboardLink
                            href="/dashboard/my-opportunities"
                            icon={Briefcase}
                            label="My Opportunities"
                        />
                        <DashboardLink
                            href="/dashboard/add-opportunity"
                            icon={PlusCircle}
                            label="Add Opportunity"
                        />
                        <DashboardLink
                            href="/dashboard/saved-opportunities"
                            icon={Save}
                            label="Saved Opportunities"
                        />
                    </nav>
                </aside>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );

}

function DashboardLink({
    href,
    icon:Icon,
    label,
}:{
    href:string;
    icon:any;
    label:string;
}){

    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-sky-400"
        >
            <Icon size={18}/>
            {label}
        </Link>
    );
}