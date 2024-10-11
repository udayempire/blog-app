import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";
interface Blog {
    "content": string,
    "title": string,
    "author": {
        "name": string
    },
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])
    console.log("hloo")


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog)
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error)
            })
    }, [])
    return { loading, blogs }
}