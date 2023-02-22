import { useContext } from "react";
import { ClickTile, ReturnClickTile } from "./ClickTiles";
import { PageContext, PageIcons, Section } from "./BigBuildingBlocks";

export function Intro(){
    /**
     * First section of this page
     */
    const {setPage} = useContext(PageContext);

    return(
        <Section>
            <p>Mam na imię Wojtek i... powinienem napisać tu coś więcej. {/*TODO NAPISAĆ COŚ WIĘCEJ*/}</p>
            <div className="flex-right stretch">
                {["Programista", "Muzyk", "Inne"].map((label) => 
                    <ClickTile icon={PageIcons[label]} label={label}
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

    return(
        <Section>
            <h2>Doświadczenie zawodowe</h2>
            <p>Oś czasu</p>
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