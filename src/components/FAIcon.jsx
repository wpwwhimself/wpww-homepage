export default function FAIcon({icon}){
    let classes_raw;
    if(icon.match(/ /)){
        icon = icon.split(" ")[1];
        classes_raw = ["fa-brands"];
    }else{
        classes_raw = ["fa-solid"];
    }
    classes_raw.push(`fa-${icon}`);

    return <i className={classes_raw.join(" ")} title={icon}></i>
}