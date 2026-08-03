import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "primary" | "success" | "warning" | "danger" | "neutral";
}

export default function Badge({
    children,
    variant = "neutral",
    className = "",
    ...props
}: BadgeProps) {

    const variants = {
        primary:
            "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",

        success:
            "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",

        warning:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",

        danger:
            "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",

        neutral:
            "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}