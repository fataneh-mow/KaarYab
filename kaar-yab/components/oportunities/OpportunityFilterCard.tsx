"use client";

import {
    OpportunityCategory,
    OpportunityType,
} from "@/types/opportunity";

import {
    useAppDispatch,
    useAppSelector,
} from "@/hooks/redux";

import {
    resetFilters,
    setCategory,
    setLocation,
    setType,
    setDeadline
} from "@/store/slices/opportunitySlice";

export default function OpportunityFilterCard() {

    const dispatch = useAppDispatch();

    const {
        selectedCategory,
        selectedType,
        selectedLocation,
        selectedDeadline
    } = useAppSelector(
        (state) => state.opportunities
    );

    return (
        <div className="absolute right-0 top-14 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Category
                    </label>

                    <select
                        value={selectedCategory ?? ""}
                        onChange={(event) =>
                            dispatch(
                                setCategory(
                                    event.target.value
                                        ? event.target.value as OpportunityCategory
                                        : undefined
                                )
                            )
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    >
                        <option value="">
                            All Categories
                        </option>

                        {Object.values(OpportunityCategory).map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Type
                    </label>

                    <select
                        value={selectedType ?? ""}
                        onChange={(event) =>
                            dispatch(
                                setType(
                                    event.target.value
                                        ? event.target.value as OpportunityType
                                        : undefined
                                )
                            )
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    >
                        <option value="">
                            All Types
                        </option>

                        {Object.values(OpportunityType).map((type) => (
                            <option
                                key={type}
                                value={type}
                            >
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Location
                    </label>

                    <input
                        value={selectedLocation ?? ""}
                        onChange={(event) =>
                            dispatch(
                                setLocation(
                                    event.target.value || undefined
                                )
                            )
                        }
                        placeholder="Example: Kabul"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    />
                </div>

                <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Deadline Before
                </label>

                <input
                        type="date"
                        value={selectedDeadline ?? ""}
                        onChange={(event)=>
                            dispatch(
                                setDeadline(
                                    event.target.value || undefined
                                )
                            )
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    />
                </div>

                <button
                    type="button"
                    onClick={() => dispatch(resetFilters())}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );

}