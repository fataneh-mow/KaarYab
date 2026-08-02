import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Card({
    children,
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            className={`rounded-xl border border-slate-200 bg-white shadow-sm transition dark:border-slate-800 dark:bg-slate-900 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}