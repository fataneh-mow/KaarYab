import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";


export default function ContactPage() {

    return (

        <main>

            <ContactHero />


            <section
                className="bg-slate-50 py-20 dark:bg-slate-900"
            >

                <div
                    className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[350px_1fr] lg:px-8"
                >

                    <ContactInfo />


                    <ContactForm />

                </div>

            </section>


        </main>

    );

}