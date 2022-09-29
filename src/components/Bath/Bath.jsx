import "./Bath.css"

export default function Bath(props) {
    return(
        <div className="Bath" id={props.size}>{props.size} Bath</div>
    )
}