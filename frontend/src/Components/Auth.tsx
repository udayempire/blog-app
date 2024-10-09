import { Link } from "react-router-dom"
export const Auth = ({ type }: { type: "Signup" | "Signin" }) => {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="font-extrabold text-3xl">
                    Create an Account
                </div>
                <div className="text-slate-400 mt-2">
                    Already have an Account?
                    <Link to={"/signin"} className="pl-2 underline">Login</Link>
                </div>
            </div>

        </div>

    </div>
}