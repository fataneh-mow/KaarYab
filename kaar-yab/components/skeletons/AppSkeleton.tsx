export default function AppSkeleton() {

    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl space-y-8">


                {/* Hero/Header area */}
                <section className="
                    rounded-3xl
                    bg-slate-200
                    p-8
                    dark:bg-slate-800
                ">

                    <div className="
                        h-10
                        w-72
                        rounded-lg
                        bg-slate-300
                        dark:bg-slate-700
                    "/>


                    <div className="
                        mt-4
                        h-5
                        max-w-xl
                        rounded-lg
                        bg-slate-300
                        dark:bg-slate-700
                    "/>

                </section>



                {/* Content blocks */}
                <section className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-3
                ">

                    {
                        Array.from({
                            length:6
                        }).map((_,index)=>(

                            <div
                                key={index}
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-6
                                    dark:border-slate-800
                                    dark:bg-slate-950
                                "
                            >

                                <div className="
                                    h-6
                                    w-3/4
                                    rounded
                                    bg-slate-200
                                    dark:bg-slate-800
                                "/>


                                <div className="
                                    mt-5
                                    space-y-3
                                ">

                                    <div className="
                                        h-4
                                        rounded
                                        bg-slate-200
                                        dark:bg-slate-800
                                    "/>


                                    <div className="
                                        h-4
                                        w-5/6
                                        rounded
                                        bg-slate-200
                                        dark:bg-slate-800
                                    "/>


                                    <div className="
                                        h-4
                                        w-2/3
                                        rounded
                                        bg-slate-200
                                        dark:bg-slate-800
                                    "/>

                                </div>


                            </div>

                        ))
                    }


                </section>


            </div>

        </main>
    );
}