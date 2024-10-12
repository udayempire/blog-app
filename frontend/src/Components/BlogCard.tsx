import { Link } from "react-router-dom"

interface BlogCardProps {
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return <Link to={`/blog/get/${id}`}>
        <div className=" p-4 border-b border-slate-500 pb-4 cursor-pointer w-screen max-w-screen-md">
            <div className="flex items-center gap-2 pt-2">
                <div className="flex  items-center ">
                    <Avatar size="small" name={authorName.toUpperCase()} />
                </div>
                <div className="font-extralight ">{authorName}</div>
                <div ><Circle/></div>
                <div className=" font-light text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className=" text-slate-500 text-sm ">
                {`${Math.ceil(content.length / 100)} min read `}
            </div>
        </div>
    </Link>
}
export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-800 rounded-full dark:bg-gray-600" ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs" : 'text-md'} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    );
}
function Circle() {
    return <div className="h-1 w-1 rounded-full bg-black">
    </div>
}