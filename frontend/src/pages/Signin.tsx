import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth type="Signin"/>
            </div>
            <div className="invisible md:visible">
                <Quote />
            </div>

        </div>
    </div>
}