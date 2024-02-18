import "./style.css";

export function TextBox(props){
    const classes = [
        "flex-down",
        "tight",
        "text-box",
        props.pinLeft && "pin-left",
        props.ghost && "ghost",
        props.horizontal && "horizontal",
        props.printhide && "print-hide",
    ].filter(Boolean);

    return(
        <div className={classes.join(" ")} data-id={props.dataId}>
            {props.children}
        </div>
    )
}