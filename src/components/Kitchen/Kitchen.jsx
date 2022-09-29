import Oven from "../Oven/Oven"
import Sink from "../Sink/Sink"
import "./Kitchen.css"

export default function Kitchen() {
    return (
        <div className="Kitchen">
            <Oven />
            <Sink />
            <div className="Kitchen-section">
                Kitchen
            </div>
        </div>
    )
}