import { Appbar } from "./Appbar"

export const BlogsSkeleton = () => {
    return (
        <div>
            {/* Appbar Component */}
            <Appbar />

            {/* Main Content Container */}
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">

                    {/* Blog Content Skeleton */}
                    <div className="col-span-8">
                        {/* Blog Title Skeleton */}
                        <div className="h-12 bg-gray-300 rounded w-3/4 animate-pulse"></div>

                        {/* Blog Date Skeleton */}
                        <div className="h-4 bg-gray-300 rounded w-1/4 mt-4 animate-pulse"></div>

                        {/* Blog Content Skeleton */}
                        <div className="space-y-4 mt-6">
                            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Author Section Skeleton */}
                    <div className="col-span-4">
                        {/* Avatar Skeleton */}
                        <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>

                        {/* Author Name Skeleton */}
                        <div className="h-6 bg-gray-300 rounded w-1/2 mt-4 animate-pulse"></div>

                        {/* Author Description Skeleton */}
                        <div className="h-4 bg-gray-300 rounded w-3/4 mt-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6 mt-1 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
