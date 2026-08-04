"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import OpportunityCard from "./OpportunityCard";
import OpportunityListCard from "./OpportunityListCard";
import ErrorState from "../common/ErrorState";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectFilteredOpportunities } from "@/selectors/opportunitySelectors";
import { setOpportunities } from "@/store/slices/opportunitySlice";
import { getOpportunities } from "@/services/opportunityService";

export default function OpportunityGrid() {

    const dispatch = useAppDispatch();

    const viewMode = useAppSelector(
        (state) => state.opportunities.viewMode
    );

    const opportunities = useAppSelector(
        selectFilteredOpportunities
    );

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const load = async () => {

            try {

                setLoading(true);
                setError("");

                const data = await getOpportunities();

                dispatch(
                    setOpportunities(data)
                );

            } catch (err) {

                console.error(err);

                const message = "Failed to load opportunities.";

                setError(message);

                toast.error(message);

            } finally {

                setLoading(false);

            }

        };

        load();

    }, [dispatch]);

    // if (loading) {

    //     return (
    //         <section className="py-16">
    //             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    //                     {Array.from({ length: 6 }).map((_, index) => (
    //                         <OpportunityCardSkeleton key={index} />
    //                     ))}
    //                 </div>
    //             </div>
    //         </section>
    //     );

    // }

    if (error) {

        return (
            <ErrorState
                title="Unable to load opportunities"
                description={error}
            />
        );

    }

    return (
        <section className="py-16">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {
                    opportunities.length === 0 ? (

                        <ErrorState
                            title="No opportunities found"
                            description="Try changing your search or filters."
                        />

                    ) : viewMode === "grid" ? (

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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

                        <div className="flex flex-col gap-6">

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