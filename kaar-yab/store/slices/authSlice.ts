import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import type {
    User,
    AuthState,
} from "@/types/auth";


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};


const authSlice = createSlice({

    name: "auth",

    initialState,


    reducers: {


        signup(
            state,
            action: PayloadAction<User>
        ) {

            state.user = action.payload;

        },


        login(
            state,
            action: PayloadAction<User>
        ) {

            state.user = action.payload;

            state.isAuthenticated = true;

        },


        logout(state) {

            state.user = null;

            state.isAuthenticated = false;

        },


        setUser(
            state,
            action: PayloadAction<User | null>
        ) {

            state.user = action.payload;

            state.isAuthenticated = !!action.payload;

        },


    },

});


export const {
    signup,
    login,
    logout,
    setUser,
} = authSlice.actions;


export default authSlice.reducer;