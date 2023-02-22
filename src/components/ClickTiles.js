export function ClickTile({icon, label, clickfun, animateIcon = null}){
    let classes_raw = ["fa-solid", `fa-${icon}`];
    if(animateIcon) classes_raw.push(`fa-${animateIcon}`);

    return(
        <div className="click-tile flex-down center clickable"
            onClick={clickfun}>
            <i className={classes_raw.join(" ")}></i>
            <h3>{label}</h3>
        </div>
    );
}

export function ReturnClickTile({clickfun}){
    return(
        <div className="click-tile small flex-right center clickable"
            onClick={clickfun}>
            <i className="fa-solid fa-angles-left"></i>
            <h3>Wróć</h3>
        </div>
    );
}