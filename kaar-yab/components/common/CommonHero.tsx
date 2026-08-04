import { ReactNode } from "react";


interface CommonHeroProps {
    badge?: string;
    title: ReactNode;
    description?: string;
    children?: ReactNode;
}


export default function CommonHero({
    badge,
    title,
    description,
    children,
}: CommonHeroProps) {

    return (

        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 py-37 text-white"
        >

            <div
                className="absolute inset-0 bg-indigo-950/30"
            />


            <div
                className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
            >

                {
                    badge && (

                        <span
                            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                        >
                            {badge}
                        </span>

                    )
                }



                <h1
                    className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
                >
                    {title}
                </h1>



                {
                    description && (

                        <p
                            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80"
                        >
                            {description}
                        </p>

                    )
                }



                {
                    children && (

                        <div
                            className="mt-10 flex justify-center"
                        >
                            {children}
                        </div>

                    )
                }


            </div>


        </section>

    );

}