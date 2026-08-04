import type { Opportunity } from "@/types/opportunity";

interface Props {
    opportunity: Opportunity;
}

export default function OpportunityApplyCard({
    opportunity,
}: Props) {

    return (
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Apply Now
            </h3>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Application Deadline
                </p>

                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {opportunity.deadline}
                </p>
            </div>

            <a
                href={opportunity.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-sky-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-700"
            >
                Apply Now
            </a>
        </aside>
    );

}