import { configureStore } from "@reduxjs/toolkit";

import opportunityReducer from "./slices/opportunitySlice";
import authReducer from "./slices/authSlice";


export const store = configureStore({

    reducer: {

        auth: authReducer,

        opportunities: opportunityReducer,

    },

});


export type RootState = ReturnType<
    typeof store.getState
>;


export type AppDispatch =
    typeof store.dispatch;