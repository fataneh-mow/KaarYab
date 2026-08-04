import { values } from "@/data/aboutValues";

export default function AboutValues() {

    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                    Our Values
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {value.title}
                            </h3>

                            <p className="mt-3 text-slate-600 dark:text-slate-400">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}