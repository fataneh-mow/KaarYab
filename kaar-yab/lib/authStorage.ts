import type { User } from "@/types/auth";


const AUTH_KEY = "kaaryab_auth";



export function saveAuthUser(user: User) {

    if(typeof window === "undefined") return;


    localStorage.setItem(
        AUTH_KEY,
        JSON.stringify(user)
    );

}



export function getAuthUser(): User | null {

    if(typeof window === "undefined") {

        return null;

    }


    const user =
        localStorage.getItem(
            AUTH_KEY
        );


    return user
        ? JSON.parse(user)
        : null;

}



export function removeAuthUser() {

    if(typeof window === "undefined") return;


    localStorage.removeItem(
        AUTH_KEY
    );

}