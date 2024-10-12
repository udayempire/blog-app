import { FullBlog } from "../Components/Fullblog"
import { useBlog } from "../Hooks/index"
import { useParams } from "react-router-dom"
export const Blog=()=>{
    const { id } = useParams()
    const {loading,blog} = useBlog({
        id: id || ""
    });
    if(loading || !blog){
        return <div>
            loading...
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
    
}