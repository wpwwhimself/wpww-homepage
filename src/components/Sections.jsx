import { useContext } from "react";
import { ClickTile, ReturnClickTile, SeeAlso } from "./ClickTiles";
import { PageContext, PageIcons, Section } from "./BigBuildingBlocks";
import { LangContext } from "../App";
import FAIcon from "./FAIcon";

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

export function Programista(){
    /**
     * Doświadczenie zawodowe
     * 
     * Znajomość języków
     * 
     * Moje projekty
     * * ta strona
     * * Muzyka Szyta Na Miarę
     * * Sous-chef
     * * Projekt Organista
     * * Brzoskwinia🚧
     * * Gruszka
     */
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    return(
        <Section>
            <h2>
                <FAIcon icon="timeline" /> {__("programista_headings.exp")}
            </h2>
            <p>Oś czasu</p>
            <SeeAlso>
                <ClickTile icon="brands github" small={true} />
            </SeeAlso>
            <ReturnClickTile clickfun={() => setPage("Intro")} />
        </Section>
    );
}

export function Muzyk(){
    /**
     * Background nauki
     * 
     * Zespoły
     * 
     * Usługi
     * * Muzyka Szyta Na Miarę
     * 
     * Moja twórczość
     * * brzoskwinia
     */
}