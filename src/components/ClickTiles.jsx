import { useContext } from "react";
import { LangContext } from "../App";
import FAIcon from "./FAIcon";

export function ClickTile({icon, label = null, clickfun, animateIcon = null, small = false}){
    let classes_raw;
    if(icon.match(/ /)){
        icon = icon.split(" ")[1];
        classes_raw = ["fa-brands"];
    }else{
        classes_raw = ["fa-solid"];
    }
    classes_raw.push(`fa-${icon}`)
    
    if(animateIcon) classes_raw.push(`fa-${animateIcon}`);

    return(
        <div className={`click-tile flex-down center clickable ${small && "small"}`}
            onClick={clickfun}>
            <i className={classes_raw.join(" ")}></i>
            {label && <h3>{label}</h3>}
        </div>
    );
}

export function ReturnClickTile({clickfun}){
    const {__} = useContext(LangContext);

    return(
        <div className="click-tile small flex-right center clickable"
            onClick={clickfun}>
            <FAIcon icon="angles-left" />
            <h3>{__("return_click_tile")}</h3>
        </div>
    );
}

export function SeeAlso(props){
    const {__} = useContext(LangContext);

    return(
        <div className="flex-right center see-also framed">
            <h3>{__("see_also")}</h3>
            {props.children}
        </div>
    );
}