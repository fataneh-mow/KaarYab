"use client";

import {
    forwardRef,
    useState,
} from "react";

import {
    Eye,
    EyeOff,
} from "lucide-react";


interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}



const Input = forwardRef<HTMLInputElement, InputProps>(
(
    {
        type,
        className = "",
        ...props
    },
    ref
) => {


    const [showPassword, setShowPassword] = useState(false);



    const isPassword =
        type === "password";



    return (

        <div
            className="relative"
        >

            <input

                ref={ref}

                type={
                    isPassword
                        ? (
                            showPassword
                                ? "text"
                                : "password"
                        )
                        : type
                }

                className={`
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    transition
                    focus:border-sky-500
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-white
                    ${isPassword ? "pr-12" : ""}
                    ${className}
                `}

                {...props}

            />



            {
                isPassword && (

                    <button

                        type="button"

                        onClick={() =>
                            setShowPassword(
                                (prev)=>!prev
                            )
                        }

                        className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        hover:text-sky-600
                        dark:text-slate-400
                        "

                    >

                        {
                            showPassword
                                ? <EyeOff size={20}/>
                                : <Eye size={20}/>
                        }


                    </button>

                )
            }


        </div>

    );

});


Input.displayName = "Input";


export default Input;