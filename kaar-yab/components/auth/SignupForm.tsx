"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import {
    Button,
    Input,
} from "@/components/common";

import {
    signupSchema,
    SignupFormData,
} from "@/lib/validations/signupSchema";

import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import { saveUser } from "@/lib/userStorage";
import type { User } from "@/types/auth";

export default function SignupForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors,
            isSubmitting,
        },
    } = useForm<SignupFormData>({
        resolver:zodResolver(signupSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        },
    });

    const onSubmit = async (
        data: SignupFormData
    ) => {


        const user: User = {
            id: uuid(),
            name: data.name,
            email: data.email,
            password: data.password,
            role: "user",
        };

        saveUser(user);

        reset();

        toast.success(
            "Account created successfully!"
        );

        router.push("/login");
    };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
        >

            <h1
                className="text-3xl font-bold text-slate-900 dark:text-white"
            >
                Create Account
            </h1>


            <p
                className="mt-3 text-slate-600 dark:text-slate-400"
            >
                Join KaarYab and discover new opportunities.
            </p>



            <div
                className="mt-8 space-y-5"
            >

                <div>

                    <Input
                        placeholder="Full name"
                        {...register("name")}
                    />

                    {
                        errors.name && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )
                    }

                </div>



                <div>

                    <Input
                        type="email"
                        placeholder="Email address"
                        {...register("email")}
                    />

                    {
                        errors.email && (
                            <p className="mt-2 text-sm text-red-500">
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
                            <p className="mt-2 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )
                    }

                </div>



                <div>

                    <Input
                        type="password"
                        placeholder="Confirm password"
                        {...register("confirmPassword")}
                    />

                    {
                        errors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )
                    }

                </div>



                <Button
                    type="submit"
                    className="w-full"
                >
                    {
                        isSubmitting
                        ? "Creating..."
                        : "Create Account"
                    }
                </Button>


            </div>



            <p
                className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400"
            >

                Already have an account?

                {" "}

                <Link
                    href="/login"
                    className="font-semibold text-sky-600 hover:text-sky-700"
                >
                    Login
                </Link>

            </p>


        </form>

    );

}