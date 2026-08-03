import {
    Briefcase,
    GraduationCap,
    BookOpen,
    Laptop,
    MonitorPlay,
    Rocket,
} from "lucide-react";

import { categories } from "@/data/categories";


const icons = {
    Briefcase,
    GraduationCap,
    BookOpen,
    Laptop,
    MonitorPlay,
    Rocket,
};


export default function Categories() {
    return (
        <section className="bg-slate-50 py-20 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto mb-12 max-w-2xl text-center">

                    <p className="mb-3 text-sm font-semibold text-sky-600">
                        Explore Categories
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Find Opportunities That Match Your Goals
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Browse opportunities based on your interests,
                        skills, and career goals.
                    </p>

                </div>


                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {categories.map((category) => {

                        const Icon =
                            icons[
                                category.icon as keyof typeof icons
                            ];

                        return (
                            <div
                                key={category.id}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                            >

                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-300">

                                    <Icon size={24} />

                                </div>


                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                    {category.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}