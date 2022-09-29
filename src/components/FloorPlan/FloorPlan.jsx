import "./FloorPlan.css";
import Kitchen from "../Kitchen/Kitchen"
import LivingRoom from "../LivingRoom/LivingRoom"
import Bedroom from "../Bedroom/Bedroom"
import Bath from "../Bath/Bath"

export default function FloorPlan() {
    return (
        <div className="FloorPlan">
            <Kitchen />
            <LivingRoom />
            <Bedroom bedNum={1}/>
            <Bedroom bedNum={2} />
            <Bedroom bedNum={3} />
            <Bath size={"Full"} />
            <Bath size={"Half"} />
        </div>
    )
}