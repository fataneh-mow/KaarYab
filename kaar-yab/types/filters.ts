import {
  OpportunityCategory,
  OpportunityType,
} from "./opportunity";

export interface OpportunityFilters {
  search: string;

  category: OpportunityCategory | "All";

  location: string;

  type: OpportunityType | "All";

  deadline: "All" | "Expired" | "Expiring Soon";

  tags: string[];
}