import { BlogCard } from "../Components/BlogCard"
import { Appbar } from "../Components/Appbar"
 
export const Blogs = () => {
    return <div>
        <Appbar/>
        <div className="flex justify-center mt-2">
            <div className="max-w-xl">
                <BlogCard
                    authorName={"Uday"}
                    title={"How an Ugly single page website makes $5000 a month without affliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online-Making money online is dream for many young to old all people."}
                    publishedDate={"11th October 2024"}
                />
                <BlogCard
                    authorName={"Uday"}
                    title={"How an Ugly single page website makes $5000 a month without affliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online-Making money online is dream for many young to old all people."}
                    publishedDate={"11th October 2024"}
                />
                <BlogCard
                    authorName={"Uday"}
                    title={"How an Ugly single page website makes $5000 a month without affliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online-Making money online is dream for many young to old all people."}
                    publishedDate={"11th October 2024"}
                />
                <BlogCard
                    authorName={"Uday"}
                    title={"How an Ugly single page website makes $5000 a month without affliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online-Making money online is dream for many young to old all people."}
                    publishedDate={"11th October 2024"}
                />
            </div>
        </div>
    </div>

}