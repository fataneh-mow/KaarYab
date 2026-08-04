import { features } from "@/data/features";

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">

                    <p className="mb-3 text-sm font-semibold text-sky-600">
                        Why KaarYab?
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Making Opportunities Easier to Find
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        We bring valuable opportunities together in one simple
                        and accessible platform.
                    </p>

                </div>


                <div className="mt-12 grid gap-6 md:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                            >

                                <div className="flex size-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                                    <Icon size={24} />
                                </div>


                                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                                    {feature.title}
                                </h3>


                                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                    {feature.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}