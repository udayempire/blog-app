import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="invisible md:visible">
                <Quote />
            </div>

        </div>
    </div>
}