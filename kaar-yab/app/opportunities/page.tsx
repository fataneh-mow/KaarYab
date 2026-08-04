import OpportunityGrid from "@/components/oportunities/OpportunityGrid";
import OpportunityHero from "@/components/oportunities/OpportunityHero";
import OpportunityToolbar from "@/components/oportunities/OpportunityToolbar";

export default function OpportunitiesPage() {
    return (
        <>
            <OpportunityHero />
            <OpportunityToolbar />
            <OpportunityGrid />
        </>
    );
}