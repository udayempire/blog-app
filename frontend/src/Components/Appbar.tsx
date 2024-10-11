import { Avatar } from "../Components/BlogCard"
export const Appbar=()=>{
    return <div className="border-b flex justify-between px-10 items-center p-2 ">
        <div className="text-xl font-semibold">
            Medium
        </div>
        <div>
            <Avatar size="big" name={"Uday Kumar"}/>
        </div>

    </div>
}