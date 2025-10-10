import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  count?: number;
  className?: string;
}

const LoadingSkeleton = ({ count = 1, className }: LoadingSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn("video-card animate-pulse pointer-events-none", className)}
          aria-label="Loading video content"
        >
          {/* Thumbnail Skeleton */}
          <div className="thumbnail bg-gray-200 dark:bg-gray-700 rounded-lg" />

          {/* Content Skeleton */}
          <article>
            <div>
              <figure>
                {/* Avatar Skeleton */}
                <div className="w-[34px] h-[34px] bg-gray-200 dark:bg-gray-700 rounded-full" />
                <figcaption>
                  {/* Username Skeleton */}
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2" />
                  {/* Visibility Skeleton */}
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                </figcaption>
              </figure>
              <aside>
                {/* Views Skeleton */}
                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8" />
              </aside>
            </div>
            {/* Title Skeleton */}
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full mt-2" />
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mt-1" />
          </article>

          {/* Duration Badge Skeleton */}
          <div className="duration bg-gray-200 dark:bg-gray-700">
            <div className="h-3 w-8 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
