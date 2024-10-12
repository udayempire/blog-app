export const BlogSkeleton = () => {
    return <div role="status" className="max-w-sm animate-pulse">
        <div className=" p-4 pb-4 cursor-pointer w-screen max-w-screen-md">
            <div className="flex items-center gap-2 pt-2">
                <div className="flex  items-center ">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className=" font-light text-slate-500">
                    <div className=" bg-gray-200 rounded-full h-12 w-12 mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-bold">
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            </div>
            <div className=" text-slate-500 text-sm ">
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            </div>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
    </div>
}