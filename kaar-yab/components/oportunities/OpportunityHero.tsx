import Image from "next/image";


export default function OpportunityHero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900">

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">

                <div className="flex-1">

                    <p className="mb-4 text-sm font-semibold text-sky-600">
                        Discover Opportunities
                    </p>


                    <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
                        Find Opportunities That Match Your Future Goals
                    </h1>


                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Explore jobs, internships, scholarships, remote work,
                        and learning opportunities from Afghanistan and around
                        the world.
                    </p>

                </div>


                <div className="relative h-64 w-full flex-1 sm:h-80">

                    <Image
                        src="/images/opportunitiesHero.png"
                        alt="Opportunity search illustration"
                        fill
                        className="object-contain"
                        priority
                    />

                </div>

            </div>

        </section>
    );
}