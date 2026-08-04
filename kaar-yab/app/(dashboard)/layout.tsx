import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
    children,
}:{
    children:React.ReactNode;
}) {


    return (

        <div
            className="min-h-screen bg-slate-50 dark:bg-slate-900"
        >

            <DashboardHeader />


            <main
                className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
            >

                {children}

            </main>


        </div>

    );

}