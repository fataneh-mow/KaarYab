import Button from "./Button";

interface ErrorStateProps {
    title?: string;
    description?: string;
    onRetry?: () => void;
}

export default function ErrorState({
    title = "Something went wrong",
    description = "Please try again.",
    onRetry,
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-red-200 bg-red-50 p-10 text-center dark:border-red-900 dark:bg-red-950">
            <h2 className="text-xl font-bold text-red-700 dark:text-red-300">
                {title}
            </h2>

            <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                {description}
            </p>

            {onRetry && (
                <Button
                    className="mt-6"
                    onClick={onRetry}
                >
                    Try Again
                </Button>
            )}
        </div>
    );
}
