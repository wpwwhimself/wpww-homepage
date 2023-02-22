import { useContext } from "react";
import { PageContext, Section } from "../BigBuildingBlocks/BigBuildingBlocks";
import { LangContext } from "../../App";
import FAIcon from "../FAIcon";
import Timeline from "../Timeline/Timeline";
import { ClickTile, ReturnClickTile, SeeAlso } from "../ClickTiles/ClickTiles";
import "./style.css";

export function Programista() {
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
                name: "edu_econ.name",
                place: "edu_econ.place",
                placeLink: "https://ue.poznan.pl/",
                span: ["10.2022", null],
                summaryMode: "i_can",
                summary: "edu_econ.summary"
            }, {
                name: "edu_math.name",
                place: "edu_math.place",
                placeLink: "https://wmi.amu.edu.pl/",
                span: ["10.2019", "07.2022"],
                summaryMode: "i_can",
                summary: "edu_math.summary"
            }, {
                name: "edu_it.name",
                place: "edu_it.place",
                placeLink: "https://zszwolsztyn.pl/",
                span: ["09.2013", "05.2017"],
                summaryMode: "i_can",
                summary: "edu_it.summary"
            }
        ],
        jobExperience: [
            {
                name: "jex_questy.name",
                place: "jex_questy.place",
                placeLink: "https://questy.pl/",
                span: ["08.2022", null],
                summaryMode: "i_can",
                summary: "jex_questy.summary"
            }, {
                name: "jex_foram.name",
                place: "jex_foram.place",
                placeLink: "https://artforma.pl/",
                span: ["08.2017", "09.2019"],
                summaryMode: "i_can",
                summary: "jex_foram.summary"
            }
        ]
    };
    
    return <Section>
        <h2><FAIcon icon="timeline" /> {__("programista_headings.exp")}</h2>
        <Timeline boxesUp={tmln_contents.education} boxesDown={tmln_contents.jobExperience} />
        
        <h2><FAIcon icon="cog" /> {__("programista_headings.langs")}</h2>
        <div className="flex-right center zoom-icons" style={{fontSize: "2em"}}>
            {[
                "html5", "css3", "js", "react", "php", "laravel",
                "r-project", "git-alt", "docker", "ubuntu", "symfony", "microsoft",
                "wordpress", "bootstrap", "python"
            ].map((icon, ind) => <FAIcon icon={`brands ${icon}`} key={ind} title={icon} />)}
        </div>
        
        <h2><FAIcon icon="scroll" /> {__("programista_headings.projects")}</h2>
        <p>🚧TBA🚧</p>
        
        <SeeAlso>
        {[["brands github", "https://www.github.com/wpwwhimself/"], ["brands linkedin", "https://www.linkedin.com/in/wpwwhimself/"]].map(([icon, link]) => <ClickTile icon={icon} small={true} clickfun={() => window.location.assign(link)} />)}
        </SeeAlso>
        <ReturnClickTile clickfun={() => setPage("Intro")} />
    </Section>;
}