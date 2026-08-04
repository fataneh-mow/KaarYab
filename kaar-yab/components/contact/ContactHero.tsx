export default function ContactHero() {

    return (

        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 py-32 text-white"
        >

            <div
                className="absolute inset-0 bg-indigo-950/30"
            />


            <div
                className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
            >

                <span
                    className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                    Contact KaarYab
                </span>


                <h1
                    className="mt-6 text-4xl font-extrabold md:text-6xl"
                >
                    We Would Love
                    <span className="block text-sky-300">
                        To Hear From You
                    </span>
                </h1>


                <p
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                >
                    Have questions, suggestions, or feedback?
                    Send us a message and help us improve KaarYab.
                </p>


            </div>

        </section>

    );

}