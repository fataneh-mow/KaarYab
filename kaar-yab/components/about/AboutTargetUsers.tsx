import { users } from "@/data/users";

export default function AboutTargetUsers() {

    return (
        <section className="bg-slate-50 py-35 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Who We Help
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {users.map((user) => {

                        const Icon = user.icon;

                        return (
                            <div
                                key={user.title}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                            >
                                <Icon
                                    size={32}
                                    className="text-sky-600"
                                />

                                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                                    {user.title}
                                </h3>

                                <p className="mt-3 text-slate-600 dark:text-slate-400">
                                    {user.description}
                                </p>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>
    );

}