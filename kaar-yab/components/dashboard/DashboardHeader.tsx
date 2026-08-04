"use client";


import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";

import {
    logout,
} from "@/store/slices/authSlice";


import {
    useAppDispatch,
} from "@/hooks/redux";


import {
    removeAuthUser,
} from "@/lib/authStorage";


export default function DashboardHeader(){


    const {
        user,
    } = useAuth();


    const dispatch = useAppDispatch();



    const handleLogout = ()=>{


        dispatch(
            logout()
        );


        removeAuthUser();


    };



    return (

        <header
            className="
            border-b
            border-slate-200
            bg-white
            dark:border-slate-800
            dark:bg-slate-950
            "
        >

            <div
                className="
                mx-auto
                flex
                max-w-7xl
                items-center
                justify-between
                px-4
                py-5
                sm:px-6
                lg:px-8
                "
            >


                <Link
                    href="/dashboard"
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >

                    KaarYab Dashboard

                </Link>



                <div
                    className="flex items-center gap-4"
                >

                    <div
                        className="text-right"
                    >

                        <p
                            className="font-semibold text-slate-900 dark:text-white"
                        >
                            {user?.name}
                        </p>


                        <p
                            className="text-sm text-slate-500"
                        >
                            {user?.role}
                        </p>


                    </div>



                    <button
                        onClick={handleLogout}
                        className="
                        rounded-xl
                        bg-red-500
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        hover:bg-red-600
                        "
                    >

                        Logout

                    </button>


                </div>


            </div>


        </header>

    );

}