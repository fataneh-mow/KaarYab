import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

import {
    OpportunityCategory,
    OpportunityType,
} from "@/types/opportunity";


export const selectFilteredOpportunities = createSelector(

    [
        (state: RootState) => state.opportunities.items,
        (state: RootState) => state.opportunities.searchTerm,
        (state: RootState) => state.opportunities.selectedCategory,
        (state: RootState) => state.opportunities.selectedType,
        (state: RootState) => state.opportunities.selectedLocation,
    ],

    (
        opportunities,
        searchTerm,
        selectedCategory,
        selectedType,
        selectedLocation,
    ) => {

        return opportunities.filter((opportunity) => {

            const searchValue = searchTerm.toLowerCase();


            const matchesSearch =
                opportunity.title.toLowerCase().includes(searchValue) ||
                opportunity.organization
                    .toLowerCase()
                    .includes(searchValue) ||
                opportunity.tags.some((tag) =>
                    tag.toLowerCase().includes(searchValue)
                );


            const matchesCategory =
                !selectedCategory ||
                opportunity.category === selectedCategory;


            const matchesType =
                !selectedType ||
                opportunity.type === selectedType;


            const matchesLocation =
                !selectedLocation ||
                opportunity.location === selectedLocation;



            return (
                matchesSearch &&
                matchesCategory &&
                matchesType &&
                matchesLocation
            );

        });

    }

);
