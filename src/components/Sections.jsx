import { useContext, useEffect } from "react";
import { ClickTile, ArrowClickTile } from "./ClickTiles";
import { PageContext, PageIcons, PageLinks } from "./BigBuildingBlocks";
import { LangContext } from "../pages/Layout";
import { useLocation } from "react-router-dom";

export function Section({clickTileFun = null, children}){
    const {__} = useContext(LangContext);
    const loc = useLocation();
    const PageNames = {};
    Object.keys(PageLinks).forEach(key => PageNames[PageLinks[key]] = key);

    useEffect(() => {
        document.title = (PageNames[loc.pathname] === "Intro") ? 
            "Wojciech Przybyła" :
            `${__("pages."+PageNames[loc.pathname])} | Wojciech Przybyła`;
    })
  
    return(
        <div className="flex-down">
            <div className="section-header flex-right center">
                <h1>
                <i className={`fa-solid fa-${PageIcons[PageNames[loc.pathname]]}`}></i> {__("pages."+PageNames[loc.pathname])}
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
    const {__} = useContext(LangContext);

    return(
        <Section clickTileFun="/">
            <h3>🚧{__("tba_header")}🚧</h3>
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