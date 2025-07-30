import { useContext, useEffect } from "react";
import { ClickTile, ArrowClickTile } from "./ClickTiles";
import { LangContext } from "../pages/Layout";
import { useLocation } from "react-router-dom";
import FAIcon from "./FAIcon";
import { routes } from "../App";

export function Section({clickTileFun = null, children, title = null}){
    const {__} = useContext(LangContext);
    const loc = useLocation();
    const currentRoute = routes.find(route => route.link === loc.pathname);

    title ??= __("pages."+currentRoute.name);

    useEffect(() => {
        document.title = (currentRoute.name === "Intro") ? 
            "Wojciech Przybyła" :
            `${title} | Wojciech Przybyła`;
    })

    return(
        <div className="flex-down">
            <div className="section-header flex-right center print-hide stagger" style={{ "--stagger-index": 0 }}>
                <h1 className="flex-right center">
                <FAIcon icon={currentRoute.icon} />
                {title}
                </h1>
            </div>
            {clickTileFun && <ArrowClickTile clickfun={clickTileFun} />}
            <div>
                {children}
            </div>
            {clickTileFun && <ArrowClickTile clickfun={clickTileFun} />}
        </div>
    )
}

export function TBAPage(){
    /**
     * Blank page as a placeholder
     */
    return(
        <Section clickTileFun="/">
            <h3 className="four-oh-four">404</h3>
        </Section>
    )
}

export function Intro(){
    /**
     * First section of this page
     */
    const {__} = useContext(LangContext);

    let intro_text = __("intro_about_me");
    const current_age = new Date().getFullYear() - 1997;
    if (typeof intro_text === "string") intro_text = intro_text.replace(/\{age\}/, current_age);

    return(
        <Section>
            <p className="center stagger" style={{ "--stagger-index": 1 }}>{intro_text}</p>
            <div className="flex-right but-mobile-down stretch">
                {["Programista", "Muzyk", "Inne"].map((label, i) => <div className="stagger" style={{ "--stagger-index": i + 2 }} key={label}>
                    <ClickTile
                        icon={routes.find(route => route.name === label).icon}
                        label={__("pages."+label)}
                        clickfun={routes.find(route => route.name === label).link}
                        />
                </div>)}
            </div>
        </Section>
    );
}