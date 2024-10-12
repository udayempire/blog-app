import { Appbar } from "../Components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Publish = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    return <div>
        <Appbar />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <div className="p-4">
            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Enter The Title of The Blog" onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <textarea id="message" rows="20" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => {
                setContent(e.target.value)
            }}>
            </textarea>
            <button onClick={async() => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/get/${response.data.id}`)
            }} type="button" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-10 py-2 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 mt-4">Publish</button>
        </div>

    </div>

}