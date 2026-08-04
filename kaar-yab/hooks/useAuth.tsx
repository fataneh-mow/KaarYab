import {
    useAppSelector,
} from "./redux";


export function useAuth() {

    const {
        user,
        isAuthenticated,
    } = useAppSelector(
        (state) => state.auth
    );


    return {
        user,
        isAuthenticated,
    };

}