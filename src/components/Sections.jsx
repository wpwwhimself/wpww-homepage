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

    const tmln_contents = {
        education: [
            {
                name: "edu_it_name",
                place: "edu_it_place",
                placeLink: "https://zszwolsztyn.pl/",
                span: ["09.2013", "05.2017"],
                summaryMode: "i_can",
                summary: "edu_it_summary"
            },
            {
                name: "edu_math_name",
                place: "edu_math_place",
                placeLink: "https://wmi.amu.edu.pl/",
                span: ["10.2019", "07.2022"],
                summaryMode: "i_can",
                summary: "edu_math_summary"
            },
            {
                name: "edu_econ_name",
                place: "edu_econ_place",
                placeLink: "https://ue.poznan.pl/",
                span: ["10.2022", null],
                summaryMode: "i_can",
                summary: "edu_econ_summary"
            },
        ],
        jobExperience: [
            {
                name: "jex_foram_name",
                place: "jex_foram_place",
                placeLink: "https://artforma.pl/",
                span: ["08.2017", "09.2019"],
                summaryMode: "i_can",
                summary: "jex_foram_summary"
            },
            {
                name: "jex_questy_name",
                place: "jex_questy_place",
                placeLink: "https://questy.pl/",
                span: ["08.2022", null],
                summaryMode: "i_can",
                summary: "jex_questy_summary"
            },
        ]
    };

    return(
        <Section>
            <h2>
                <FAIcon icon="timeline" /> {__("programista_headings.exp")}
            </h2>
            <Timeline
                boxesUp={tmln_contents.education}
                boxesDown={tmln_contents.jobExperience}
                />

            <SeeAlso>
                {[
                    ["brands github", "https://www.github.com/wpwwhimself/"],
                    ["brands linkedin", "https://www.linkedin.com/in/wpwwhimself/"],
                ].map(([icon, link]) =>
                    <ClickTile icon={icon} small={true}
                        clickfun={() => window.location.assign(link)} />
                )}
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