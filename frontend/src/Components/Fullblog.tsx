import { Appbar } from "./Appbar"
import { Blog } from "../Hooks/index"
import { Avatar } from "./BlogCard"
export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12 ">
                <div className=" col-span-8">
                    <div className="text-5xl font-bold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 12th October 2024
                    </div>
                    <div className="font-semibold pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ">
                    <Avatar name={blog.author.name} size="small"/>
                    <div className="text-xl font-bold">
                        {blog.author.name || "Anonmynous"}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Random catch phrase about the author ability to grab a more number of emoployees
                    </div>
                </div>
            </div>
        </div>
    </div>
}