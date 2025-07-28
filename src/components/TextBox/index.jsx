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
        props.noHighlight && "no-highlight",
        props.stagger && "stagger",
    ].filter(Boolean);

    return(
        <div className={classes.join(" ")} data-id={props.dataId}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            style={{ "--stagger-index": props.stagger }}
        >
            {props.children}
        </div>
    )
}