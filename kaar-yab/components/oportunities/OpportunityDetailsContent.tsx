import type { Opportunity } from "@/types/opportunity";

interface Props {
    opportunity: Opportunity;
}

export default function OpportunityDetailsContent({
    opportunity,
}: Props) {

    return (
        <div className="space-y-8">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    About Opportunity
                </h2>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {opportunity.description}
                </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Requirements
                </h2>

                <ul className="mt-5 space-y-3">
                    {opportunity.requirements.map((item) => (
                        <li
                            key={item}
                            className="rounded-lg bg-slate-100 px-4 py-3 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                        >
                            ✓ {item}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );

}