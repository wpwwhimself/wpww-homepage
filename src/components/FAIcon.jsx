export default function FAIcon({icon}){
    if(icon.substring(0,1) === "!"){
        icon = icon.substring(1);
        return <img src={`/pics/custom_icons/${icon}.svg`} alt={icon} className="custom-icon" title={icon} />;
    }else if(icon.charAt(0) === "."){
        icon = icon.substring(1);
        let classes_raw;
        classes_raw = ["lni"];
        classes_raw.push(`lni-${icon}`);
        
        return <i className={classes_raw.join(" ")} title={icon}></i>
    }else{
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
}