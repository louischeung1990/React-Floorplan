import "./Bedroom.css"

export default function Bedroom(props) {
    return (
        <div className="Bedroom" id={`bed-${props.bedNum}`}>Bedroom {props.bedNum}</div>
    )
}