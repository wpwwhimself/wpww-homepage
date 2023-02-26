import { useContext } from "react";
import { PageContext } from "../BigBuildingBlocks/BigBuildingBlocks";
import { Section } from "../Sections";
import "./style.css";

export function Inne(){
    const {setPage} = useContext(PageContext);

    return <Section clickTileFun={() => setPage("Intro")}>

    </Section>;
}