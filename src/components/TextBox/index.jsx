import "./style.css";

export function TextBox(props){
    return(
        <div className={`flex-down tight text-box ${props.pinLeft && "pin-left"} ${props.ghost && "ghost"} ${props.horizontal && "horizontal"}`}>
            {props.children}
        </div>
    )
}