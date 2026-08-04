"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, Input } from "@/components/common";
import { contactSchema, ContactFormData } from "@/lib/validations/validationContactForm";
import { useState } from "react";

export default function ContactForm() {
    const [serverError,setServerError] = useState("");
    const [loading, setLoading] = useState(false)

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

        try {
            setServerError("");
            setLoading(true);
            const response = await fetch(
                "/api/contact",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(data),

                }
            );
            const result = await response.json();
            if(!response.ok){
                throw new Error(
                    result.message || "Failed to send message"
                );
            }
            toast.success(
                "Message sent successfully!"
            );
            reset();
        }catch(error){
            console.error(error);
            const message =
                error instanceof Error
                ? error.message
                : "Something went wrong";
            setServerError(message);
            toast.error(
                message
            );
        } finally {
            setLoading(false)
        }

    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`
                rounded-3xl 
                border 
                border-slate-200 
                bg-white 
                p-8 
                shadow-sm 
                dark:border-slate-800 
                dark:bg-slate-950
                ${isSubmitting ? "opacity-70" : ""}
            `}
        >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Send a Message
            </h2>


            {
                serverError && (

                    <div className="
                        mt-4
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        p-4
                        text-sm
                        text-red-600
                        dark:border-red-900
                        dark:bg-red-950
                        dark:text-red-300
                    ">
                        {serverError}
                    </div>

                )
            }

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
                {
                    isSubmitting && (

                        <p className="text-sm text-sky-600 dark:text-sky-400">
                            Sending your message, please wait...
                        </p>

                    )
                }
                <Button
                    disabled={isSubmitting}
                    type="submit"
                >
                    {
                        isSubmitting
                        ? "Sending..."
                        : "Send Message"
                    }
                </Button>
            </div>
        </form>
    );

}