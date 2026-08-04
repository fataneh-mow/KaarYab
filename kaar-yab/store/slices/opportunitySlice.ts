import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";


import {
    opportunities,
} from "@/data/opportunities";


import {
    Opportunity,
    OpportunityCategory,
    OpportunityType,
} from "@/types/opportunity";



interface OpportunityState {

    items: Opportunity[];

    searchTerm: string;

    selectedCategory?: OpportunityCategory;

    selectedType?: OpportunityType;

    selectedLocation?: string;

    viewMode: "grid" | "list";

    isFilterOpen: boolean;
}



const initialState: OpportunityState = {

    items: opportunities,

    searchTerm: "",

    selectedCategory: undefined,

    selectedType: undefined,

    selectedLocation: undefined,

    viewMode: "grid",

    isFilterOpen: false,

};





const opportunitySlice = createSlice({

    name: "opportunities",

    initialState,


    reducers: {
        setSearchTerm(
            state,
            action: PayloadAction<string>
        ) {

            state.searchTerm = action.payload;

        },

        setCategory(
            state,
            action: PayloadAction<OpportunityCategory | undefined>
        ) {

            state.selectedCategory = action.payload;

        },

        setType(
            state,
            action: PayloadAction<OpportunityType | undefined>
        ) {

            state.selectedType = action.payload;

        },

        setLocation(
            state,
            action: PayloadAction<string | undefined>
        ) {

            state.selectedLocation = action.payload;

        },
        setViewMode(
            state,
            action: PayloadAction<"grid" | "list">
        ){

            state.viewMode = action.payload;

        },

        toggleFilter(
            state
        ){

            state.isFilterOpen = !state.isFilterOpen;

        },

        addOpportunity(
            state,
            action: PayloadAction<Opportunity>
        ){

            state.items.push(action.payload);

        },



        deleteOpportunity(
            state,
            action: PayloadAction<string>
        ){

            state.items =
                state.items.filter(
                    item => item.id !== action.payload
                );

        },

        resetFilters(state) {
            state.searchTerm = "";
            state.selectedCategory = undefined;
            state.selectedType = undefined;
            state.selectedLocation = undefined;
        },

        setOpportunities(
            state,
            action: PayloadAction<Opportunity[]>
        ) {

            state.items = action.payload;

        },

        loadStoredOpportunities(
            state,
            action: PayloadAction<Opportunity[]>
        ){

            const defaultIds = new Set(
                state.items.map(item => item.id)
            );

            const newItems = action.payload.filter(
                item => !defaultIds.has(item.id)
            );

            state.items = [
                ...newItems,
                ...state.items,
            ];

        },
    },
});

export const {
    setSearchTerm,
    setCategory,
    setType,
    setLocation,
    setViewMode,
    toggleFilter,
    addOpportunity,
    deleteOpportunity,
    resetFilters,
    setOpportunities,
    loadStoredOpportunities
} = opportunitySlice.actions;

export default opportunitySlice.reducer;