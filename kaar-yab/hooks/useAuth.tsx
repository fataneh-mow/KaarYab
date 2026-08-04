"use client";

import {
    useAppDispatch,
    useAppSelector,
} from "@/hooks/redux";

import {
    logout as logoutAction,
} from "@/store/slices/authSlice";

import {
    removeAuthUser,
} from "@/lib/authStorage";

export function useAuth() {
    const dispatch = useAppDispatch();

    const {
        user,
        isAuthenticated,
    } = useAppSelector(
        (state)=>state.auth
    );

    const logout = () => {
        removeAuthUser();
        dispatch(
            logoutAction()
        );
    };
    return {
        user,
        isAuthenticated,
        logout,
    };

}