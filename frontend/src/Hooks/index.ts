import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";
export interface Blog {
    "title": string,
    "content": string,
    "id":string,
    "author": {
        "name": string
    },
}
export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response.data)
                setBlogs(response.data.blogs);
                setLoading(false)
            })
    })

    return {
        loading,
        blogs
    }
}