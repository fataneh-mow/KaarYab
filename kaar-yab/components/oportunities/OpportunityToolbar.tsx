"use client";

import {
    Filter,
    Grid2X2,
    List,
    Search,
} from "lucide-react";

import {
    useAppDispatch,
    useAppSelector,
} from "@/hooks/redux";

import {
    setSearchTerm,
    setViewMode,
    toggleFilter,
} from "@/store/slices/opportunitySlice";

import OpportunityFilterCard from "./OpportunityFilterCard";
import useClickOutside from "@/hooks/useClickOutside";

export default function OpportunityToolbar() {

    const dispatch = useAppDispatch();

    const {
        searchTerm,
        viewMode,
        isFilterOpen,
    } = useAppSelector(
        (state) => state.opportunities
    );


    const filterRef = useClickOutside<HTMLDivElement>(
        () => {

            if (isFilterOpen) {
                dispatch(toggleFilter());
            }

        }
    );


    return (

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:flex-row lg:items-center">

                <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 dark:border-slate-700 lg:flex-1">

                    <Search
                        size={20}
                        className="text-slate-400"
                    />

                    <input
                        value={searchTerm}
                        onChange={(event) =>
                            dispatch(
                                setSearchTerm(event.target.value)
                            )
                        }
                        placeholder="Search opportunities..."
                        className="w-full bg-transparent py-3 text-slate-700 outline-none dark:text-white"
                    />

                </div>


                <div
                    ref={filterRef}
                    className="relative flex w-full items-center gap-3 lg:w-auto"
                >

                    <button
                        type="button"
                        onClick={() => dispatch(toggleFilter())}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white transition hover:bg-sky-700 lg:flex-none"
                    >
                        <Filter size={18} />
                        Filters
                    </button>


                    <div className="flex items-center gap-2">

                        <button
                            type="button"
                            onClick={() => dispatch(setViewMode("grid"))}
                            className={`rounded-lg border p-3 transition ${viewMode === "grid" ? "bg-sky-600 text-white" : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"}`}
                        >
                            <Grid2X2 size={20}/>
                        </button>


                        <button
                            type="button"
                            onClick={() => dispatch(setViewMode("list"))}
                            className={`rounded-lg border p-3 transition ${viewMode === "list" ? "bg-sky-600 text-white" : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"}`}
                        >
                            <List size={20}/>
                        </button>

                    </div>


                    {
                        isFilterOpen && (
                            <OpportunityFilterCard />
                        )
                    }

                </div>

            </div>

        </div>

    );

}