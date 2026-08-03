import { configureStore } from "@reduxjs/toolkit";

import opportunityReducer from "./slices/opportunitySlice";


export const store = configureStore({
    reducer: {
        opportunities: opportunityReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;