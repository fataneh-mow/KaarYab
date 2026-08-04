import { contactItems } from "@/data/contactItems";

export default function ContactInfo() {

    return (
        <div className="space-y-5">
            {contactItems.map((item) => {

                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                    >
                        <Icon
                            size={28}
                            className="text-sky-600"
                        />

                        <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            {item.value}
                        </p>
                    </div>
                );

            })}
        </div>
    );

}