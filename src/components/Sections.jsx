import { useContext, useEffect } from "react";
import { ClickTile, ArrowClickTile } from "./ClickTiles";
import { PageContext, PageIcons } from "./BigBuildingBlocks";
import { LangContext } from "../App";

export function Section({clickTileFun = null, children}){
    const {page} = useContext(PageContext);
    const {__} = useContext(LangContext);

    useEffect(() => {
        document.title = (page === "Intro") ? 
            "Wojciech Przybyła" :
            `${__("pages."+page)} | Wojciech Przybyła`;
    })
  
    return(
    <div className="flex-down">
        <div className="section-header flex-right center">
            <h1>
            <i className={`fa-solid fa-${PageIcons[page]}`}></i> {__("pages."+page)}
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
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    return(
        <Section clickTileFun={() => setPage("Intro")}>
            <h3>🚧{__("tba_header")}🚧</h3>
        </Section>
    )
}

export function Intro(){
    /**
     * First section of this page
     */
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    return(
        <Section>
            <p>{__("intro_about_me")} {/*TODO NAPISAĆ COŚ WIĘCEJ*/}</p>
            <div className="flex-right but-mobile-down stretch">
                {["Programista", "Muzyk", "Inne"].map((label) => 
                    <ClickTile key={label} icon={PageIcons[label]} label={__("pages."+label)}
                        clickfun={() => setPage(label)} />
                )}
            </div>
        </Section>
    );
}