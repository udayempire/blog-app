import { BlogCard } from "../Components/BlogCard"
import { Appbar } from "../Components/Appbar"
import { useBlogs } from "../Hooks/index"
import { BlogSkeleton } from "../Components/BlogSkeleton"


export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar/>
            <div className="flex justify-center mt-2">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center mt-2">
            <div className="">
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonmonyous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd October 2024"}
                />)}
            </div>
        </div>
    </div>

}