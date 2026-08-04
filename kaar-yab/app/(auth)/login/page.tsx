"use client";

import Link from "next/link";

import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    Button,
    Input,
} from "@/components/common";

import {
    loginSchema,
    LoginFormData,
} from "@/lib/validations/loginSchema";
import toast from "react-hot-toast";


export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState:{
            errors,
            isSubmitting,
        },
    } = useForm<LoginFormData>({

        resolver:zodResolver(loginSchema),

        defaultValues:{
            email:"",
            password:"",
        },

    });

    const onSubmit = async (
        data:LoginFormData
    ) => {
        console.log(data);
        toast.success("Welcome back")
    };

    return (

        <div>

            <div
                className="text-center"
            >

                <h1
                    className="text-3xl font-bold text-slate-900 dark:text-white"
                >
                    Welcome Back
                </h1>


                <p
                    className="mt-3 text-sm text-slate-600 dark:text-slate-400"
                >
                    Login to continue finding opportunities.
                </p>


            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >


                <div>

                    <Input
                        type="email"
                        placeholder="Email address"
                        {...register("email")}
                    />

                    {
                        errors.email && (
                            <p
                                className="mt-2 text-sm text-red-500"
                            >
                                {errors.email.message}
                            </p>
                        )
                    }

                </div>

                <div>

                    <Input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />

                    {
                        errors.password && (
                            <p
                                className="mt-2 text-sm text-red-500"
                            >
                                {errors.password.message}
                            </p>
                        )
                    }

                </div>

                <div
                    className="flex items-center justify-between text-sm"
                >

                    <label
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                    >

                        <input
                            type="checkbox"
                            className="rounded"
                        />

                        Remember me

                    </label>



                    <Link
                        href="/forgot-password"
                        className="text-sky-600 hover:text-sky-700"
                    >
                        Forgot password?
                    </Link>


                </div>

                <Button
                    className="w-full"
                >

                    {
                        isSubmitting
                        ? "Logging in..."
                        : "Login"
                    }

                </Button>
            </form>

            <p
                className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400"
            >

                Don't have an account?

                {" "}

                <Link
                    href="/signup"
                    className="font-semibold text-sky-600"
                >
                    Create account
                </Link>

            </p>

        </div>

    );

}