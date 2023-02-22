import { useContext } from "react";
import { ClickTile, ReturnClickTile, SeeAlso } from "./ClickTiles/ClickTiles";
import { PageContext, PageIcons, Section } from "./BigBuildingBlocks/BigBuildingBlocks";
import { LangContext } from "../App";
import FAIcon from "./FAIcon";
import Timeline from "./Timeline/Timeline";

export function TBAPage(){
    /**
     * Blank page as a placeholder
     */
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    return(
        <Section>
            <h3>🚧{__("tba_header")}🚧</h3>
            <ReturnClickTile clickfun={() => setPage("Intro")} />
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
            <div className="flex-right stretch">
                {["Programista", "Muzyk", "Inne"].map((label) => 
                    <ClickTile key={label} icon={PageIcons[label]} label={__("pages."+label)}
                        clickfun={() => setPage(label)} />
                )}
            </div>
        </Section>
    );
}