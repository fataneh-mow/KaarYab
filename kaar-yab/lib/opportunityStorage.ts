import { opportunities as defaultOpportunities } from "@/data/opportunities";
import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab_opportunities";

export function saveOpportunity(opportunity: Opportunity) {

    const existing = getStoredOpportunities();

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([opportunity, ...existing])
    );

}

function getStoredOpportunities(): Opportunity[] {

    if (typeof window === "undefined") {
        return [];
    }

    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

}

export function getOpportunities(): Opportunity[] {

    return [
        ...getStoredOpportunities(),
        ...defaultOpportunities,
    ];

}