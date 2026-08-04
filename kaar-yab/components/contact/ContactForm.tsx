"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, Input } from "@/components/common";
import { contactSchema, ContactFormData } from "@/lib/validations/validationContactForm";

export default function ContactForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (
        data: ContactFormData
    ) => {

        console.log(data);

        reset();

        toast.success("Message sent successfully!");

    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Send a Message
            </h2>

            <div className="mt-6 space-y-5">
                <div>
                    <Input
                        placeholder="Your name"
                        {...register("name")}
                    />

                    {errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        type="email"
                        placeholder="Email address"
                        {...register("email")}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        placeholder="Subject"
                        {...register("subject")}
                    />

                    {errors.subject && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                <div>
                    <textarea
                        {...register("message")}
                        placeholder="Your message..."
                        className="min-h-40 w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:text-white"
                    />

                    {errors.message && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button>
                    {isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                </Button>
            </div>
        </form>
    );

}