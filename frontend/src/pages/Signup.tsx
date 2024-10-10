import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="Signup"/>
            </div>
            <div className="invisible md:visible">
                <Quote />
            </div>

        </div>
    </div>
}