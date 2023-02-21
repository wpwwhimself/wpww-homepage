export function ClickTile({icon, label, animateIcon = null}){
    let classes_raw = ["fa-solid", `fa-${icon}`];
    if(animateIcon) classes_raw.push(`fa-${animateIcon}`);

    return(
        <div className="click-tile flex-down center">
            <i className={classes_raw.join(" ")}></i>
            <h3>{label}</h3>
        </div>
    );
}