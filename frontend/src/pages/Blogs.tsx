import { BlogCard } from "../Components/BlogCard"
import { Appbar } from "../Components/Appbar"
import { useBlogs } from "../Hooks/index"


export const Blogs = () => {
    const {loading,blogs}  = useBlogs();
    if(loading){
        return <div>
            loading...
        </div>
    }
    
    return <div>
        <Appbar/>
        <div className="flex justify-center mt-2">
            <div className="max-w-xl">
                {blogs.map(blog=><BlogCard
                    authorName={blog.author.name || "Anonmonyous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd October 2024"}
                />)}
            </div>
        </div>
    </div>

}