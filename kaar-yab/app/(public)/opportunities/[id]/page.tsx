import OpportunityDetailsContent from "@/components/oportunities/OpportunityDetailsContent";
import OpportunityApplyCard from "@/components/oportunities/OpportunityApplyCard";
import OpportunityOverviewCard from "@/components/oportunities/OpportunityOverviewCard";
import OpportunityDetailsHero from "@/components/oportunities/OpportunityDetailsHero";

import {
    getOpportunityById,
} from "@/services/opportunityService";


interface Props {
    params: Promise<{
        id:string;
    }>;
}


export default async function OpportunityDetailsPage({
    params,
}:Props){


    const {
        id,
    } = await params;



    let opportunity;


    try {

        opportunity =
            await getOpportunityById(id);


    } catch(error){

        return (

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-20
                    text-center
                    text-xl
                    text-slate-700
                    dark:text-slate-300
                "
            >
                Opportunity not found
            </div>

        );

    }



    return (

        <main>

            <OpportunityDetailsHero
                opportunity={opportunity}
            />



            <section
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    gap-8
                    px-4
                    py-16
                    sm:px-6
                    lg:grid-cols-[1fr_360px]
                    lg:px-8
                "
            >


                <OpportunityDetailsContent
                    opportunity={opportunity}
                />



                <aside
                    className="space-y-6"
                >


                    <OpportunityOverviewCard
                        opportunity={opportunity}
                    />



                    <OpportunityApplyCard
                        opportunity={opportunity}
                    />


                </aside>


            </section>


        </main>

    );

}