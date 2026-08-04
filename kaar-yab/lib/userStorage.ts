import type { User } from "@/types/auth";


const USERS_KEY = "kaaryab_users";



export function saveUser(user: User) {

    const existingUsers =
        localStorage.getItem(USERS_KEY);


    const users: User[] =
        existingUsers
            ? JSON.parse(existingUsers)
            : [];



    users.push(user);



    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}



export function getUsers(): User[] {

    const users =
        localStorage.getItem(USERS_KEY);


    if(!users){
        return [];
    }


    return JSON.parse(users);

}



export function findUser(
    email:string,
    password:string
): User | null {


    const users = getUsers();


    const user =
        users.find(
            (user)=>
                user.email === email &&
                user.password === password
        );


    return user ?? null;

}