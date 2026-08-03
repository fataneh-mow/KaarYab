import type { Opportunity } from "@/types/opportunity";


interface Props {
    opportunity: Opportunity;
}


export default function OpportunityApplyCard({
    opportunity,
}: Props) {


    return (

        <aside
            className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 dark:border-slate-800 dark:bg-slate-950"
        >

            <h3 className="text-xl font-bold">
                Apply Now
            </h3>


            <p className="mt-4 text-sm text-slate-500">
                Deadline
            </p>


            <p className="font-semibold">
                {opportunity.deadline}
            </p>


            <a
                href={opportunity.applyLink}
                target="_blank"
                className="mt-6 block rounded-xl bg-sky-600 px-5 py-3 text-center font-semibold text-white hover:bg-sky-700"
            >
                Apply Opportunity
            </a>


        </aside>

    );

}