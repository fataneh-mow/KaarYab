"use client";

import Skeleton, {
    SkeletonProps,
} from "react-loading-skeleton";

interface LoadingSkeletonProps extends SkeletonProps {
    className?: string;
}

export default function LoadingSkeleton({
    className = "",
    ...props
}: LoadingSkeletonProps) {
    return (
        <Skeleton
            baseColor="var(--skeleton-base)"
            highlightColor="var(--skeleton-highlight)"
            className={className}
            {...props}
        />
    );
}