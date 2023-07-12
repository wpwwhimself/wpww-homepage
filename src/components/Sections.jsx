import { useContext, useEffect } from "react";
import { ClickTile, ArrowClickTile } from "./ClickTiles";
import { PageIcons, PageLinks } from "./BigBuildingBlocks";
import { LangContext } from "../pages/Layout";
import { useLocation } from "react-router-dom";
import FAIcon from "./FAIcon";

export function Section({clickTileFun = null, children, title = null}){
    const {__} = useContext(LangContext);
    const loc = useLocation();
    const PageNames = {};
    Object.keys(PageLinks).forEach(key => PageNames[PageLinks[key]] = key);

    title ??= __("pages."+PageNames[loc.pathname]);

    useEffect(() => {
        document.title = (PageNames[loc.pathname] === "Intro") ? 
            "Wojciech Przybyła" :
            `${title} | Wojciech Przybyła`;
    })

    return(
        <div className="flex-down">
            <div className="section-header flex-right center print-hide">
                <h1 className="flex-right center">
                <FAIcon icon={PageIcons[PageNames[loc.pathname]]} />
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

    return(
        <Section>
            <p>{__("intro_about_me")} {/*TODO NAPISAĆ COŚ WIĘCEJ*/}</p>
            <div className="flex-right but-mobile-down stretch">
                {["Programista", "Muzyk", "Inne"].map((label) => 
                    <ClickTile key={label} icon={PageIcons[label]} label={__("pages."+label)}
                        clickfun={PageLinks[label]} />
                )}
            </div>
        </Section>
    );
}