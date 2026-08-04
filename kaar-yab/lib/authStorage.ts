import type { User } from "@/types/auth";


const AUTH_KEY = "kaaryab_current_user";


export function saveAuthUser(
    user: User
) {

    localStorage.setItem(
        AUTH_KEY,
        JSON.stringify(user)
    );

}



export function getAuthUser(): User | null {

    const user =
        localStorage.getItem(AUTH_KEY);


    if(!user){
        return null;
    }


    return JSON.parse(user);

}



export function removeAuthUser(){

    localStorage.removeItem(
        AUTH_KEY
    );

}