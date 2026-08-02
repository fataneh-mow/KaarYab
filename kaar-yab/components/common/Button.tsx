import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary:
            "bg-sky-500 text-white hover:bg-sky-600 active:scale-[0.98]",

        secondary:
            "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",

        ghost:
            "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",

        md: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
