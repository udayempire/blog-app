import { ChangeEvent } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignupInput } from "@udayempire/blog-common"
import { BACKEND_URL } from "../config"
import axios  from "axios"
export const Auth = ({ type }: { type: "Signup" | "Signin" }) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="Signup"?"signup":"signin"}`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token",`Bearer ${jwt}`);
            navigate("/blogs")
        }catch(e){
            alert("Error while signing Up")
            console.error(e)
        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="font-extrabold text-3xl">
                        Create an Account
                    </div>
                    <div className="text-slate-500 mt-2">
                        {type==="Signin"? "Don't have an Account?": "Already Have an Account?"}
                        <Link to={type==="Signin"?"/signup":"/signin"} className="pl-2 underline">{type==="Signin"?"Sign Up":"Sign In"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type==="Signup"?<LabelledInput label="Name" placeholder="Enter Your Name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />: null}
                    <LabelledInput label="Email" type="email" placeholder="Enter Your Email" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="Enter Your Password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="Signup"? "Sign Up":"Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}
interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-md  text-black font-semibold pt-4 ">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" placeholder={placeholder} required />
    </div>
}