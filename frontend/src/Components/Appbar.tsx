import { Link } from "react-router-dom"
import { Avatar } from "../Components/BlogCard"
export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 items-center p-2 ">
        <Link to={"/blogs"}>
            <div className="text-xl font-semibold cursor-pointer">
                Medium
            </div>
        </Link>
        <div>
            <Link to={"/blogs/publish"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 ">Write Blog</button>
                <Avatar size="big" name={"Uday Kumar"} />
            </Link>
        </div>

    </div>
}