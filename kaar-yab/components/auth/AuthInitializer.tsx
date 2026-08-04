"use client";

import {
    useEffect,
} from "react";


import {
    useAppDispatch,
} from "@/hooks/redux";


import {
    setUser,
} from "@/store/slices/authSlice";


import {
    getAuthUser,
} from "@/lib/authStorage";



export default function AuthInitializer(){

    const dispatch = useAppDispatch();



    useEffect(()=>{

        const user =
            getAuthUser();


        dispatch(
            setUser(user)
        );


    },[dispatch]);



    return null;

}