"use client";


import OpportunityCard from "./OpportunityCard";
import OpportunityListCard from "./OpportunityListCard";

import {
    useAppSelector,
} from "@/hooks/redux";

import { selectFilteredOpportunities } from "@/selectors/opportunitySelectors";


export default function OpportunityGrid() {


    const opportunities = useAppSelector(
        selectFilteredOpportunities
    );


    const viewMode = useAppSelector(
        (state) => state.opportunities.viewMode
    );



    return (

        <section
            className="py-16"
        >

            <div
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >


                {
                    viewMode === "grid" ? (

                        <div
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >

                            {
                                opportunities.map((opportunity) => (

                                    <OpportunityCard

                                        key={opportunity.id}

                                        opportunity={opportunity}

                                    />

                                ))
                            }

                        </div>


                    ) : (


                        <div
                            className="flex flex-col gap-6"
                        >

                            {
                                opportunities.map((opportunity) => (

                                    <OpportunityListCard

                                        key={opportunity.id}

                                        opportunity={opportunity}

                                    />

                                ))
                            }

                        </div>


                    )
                }


            </div>


        </section>

    );
}