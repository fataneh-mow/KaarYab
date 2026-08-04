"use client";


import { Provider } from "react-redux";

import { store } from "./index";
import OpportunityLoader from "@/components/oportunities/OpportunityLoader";

interface ReduxProviderProps {
    children: React.ReactNode;
}


export default function ReduxProvider({
    children,
}: ReduxProviderProps) {

    return (
        <Provider store={store}>
            <OpportunityLoader />
            {children}
        </Provider>
    );
}