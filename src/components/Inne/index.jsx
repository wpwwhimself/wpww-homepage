import { useContext } from "react";
import { PageContext } from "../BigBuildingBlocks";
import { Section } from "../Sections";
import "./style.css";
import FAIcon from "../FAIcon";
import { LangContext } from "../../App";

export function Inne(){
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    return <Section clickTileFun={() => setPage("Intro")}>
        <h2><FAIcon icon="bicycle" /> {__("alt.headings.whatelse")}</h2>
        <p>🚧 TBA 🚧</p>
        
        <h2><FAIcon icon="tv" /> {__("alt.headings.favmedia")}</h2>
        <p>🚧 TBA 🚧</p>
    </Section>;
}