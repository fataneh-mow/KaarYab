import Image from "next/image";

export default function OpportunityHero() {

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 mb-12">
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/30" />

            <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/30" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="flex-1">
                    <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                        Discover Opportunities
                    </span>

                    <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl">
                        Find Opportunities That Match Your Future Goals
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Explore jobs, internships, scholarships, remote work,
                        and learning opportunities from Afghanistan and around
                        the world.
                    </p>
                </div>

                <div className="relative h-72 w-full flex-1 sm:h-96">
                    <Image
                        src="/images/opportunitiesHero.png"
                        alt="Opportunity search illustration"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );

}