export interface User {
    id: string;
    name: string;
    email: string;
    password: string,
    role: "user" | "admin";
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}