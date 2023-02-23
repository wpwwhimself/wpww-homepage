import { useContext } from "react";
import { LangContext } from "../../App";
import FAIcon from "../FAIcon";
import "./style.css"

export function ClickTile({icon, label = null, clickfun, animateIcon = null, small = false}){
    let IconTag;
    if(icon.substring(0,1) === "!"){
        icon = icon.substring(1);
        IconTag = <img src={`/pics/custom_icons/${icon}.svg`} alt={icon} className="custom-icon" />;
    }else{
        let classes_raw;
        if(icon.match(/ /)){
            icon = icon.split(" ")[1];
            classes_raw = ["fa-brands"];
        }else{
            classes_raw = ["fa-solid"];
        }
        classes_raw.push(`fa-${icon}`)
        if(animateIcon) classes_raw.push(`fa-${animateIcon}`);
        
        IconTag = <i className={classes_raw.join(" ")}></i>;
    }

    return(
        <div className={`click-tile flex-down center clickable ${small && "small"}`}
            onClick={clickfun}>
            {IconTag}
            {label && <h3>{label}</h3>}
        </div>
    );
}

export function ArrowClickTile({clickfun, label = null, fwd = false}){
    const {__} = useContext(LangContext);

    return(
        <div className="click-tile small flex-right center clickable"
            onClick={clickfun}>
            {!fwd && <FAIcon icon="angles-left" />}
            <h3>{__(label ?? "return_click_tile")}</h3>
            {fwd && <FAIcon icon="angles-right" />}
        </div>
    );
}

export function SeeAlso(props){
    const {__} = useContext(LangContext);

    return(
        <div className="flex-right center see-also framed centered-margins">
            <h3>{__("see_also")}</h3>
            {props.children}
        </div>
    );
}