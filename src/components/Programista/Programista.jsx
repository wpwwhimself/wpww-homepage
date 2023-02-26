import { useContext } from "react";
import { PageContext } from "../BigBuildingBlocks/BigBuildingBlocks";
import { Section } from "../Sections";
import { LangContext } from "../../App";
import FAIcon from "../FAIcon";
import Timeline from "../Timeline/Timeline";
import { ClickTile, ArrowClickTile, SeeAlso } from "../ClickTiles/ClickTiles";
import "./style.css";
import { TextBox } from "../TextBox/TextBox";

export function Programista() {
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    const tmln_contents = {
        education: [
            {
                code: "prg.edu.econ",
                placeLink: "https://ue.poznan.pl/",
                span: ["10.2022", null],
                summaryMode: "i_can",
            }, {
                code: "prg.edu.math",
                placeLink: "https://wmi.amu.edu.pl/",
                span: ["10.2019", "07.2022"],
                summaryMode: "i_can",
            }, {
                code: "prg.edu.it",
                placeLink: "https://zszwolsztyn.pl/",
                span: ["09.2013", "05.2017"],
                summaryMode: "i_can",
            }
        ],
        jobExperience: [
            {
                code: "prg.jex.questy",
                placeLink: "https://questy.pl/",
                span: ["08.2022", null],
                summaryMode: "i_can",
            }, {
                code: "prg.jex.foram",
                placeLink: "https://artforma.pl/",
                span: ["08.2017", "09.2019"],
                summaryMode: "i_can",
            }
        ]
    };

    const technologies = [
        "js", "react", "php", "laravel",
        "r-project", "git-alt", "docker", "ubuntu", "symfony",
        "wordpress", "bootstrap", "python"
    ];

    const other_techs = [
        "C++",
        "Microsoft Excel", "Microsoft Word",
        "Adobe Photoshop", "Adobe Illustrator", 
    ];

    const projects = [
        {
            code: "prg.proj.homepage",
            label: "!wpww.pl",
            link: "http://wpww.pl/",
            tech: ["react", "js"],
            icon: "!logo_blue",
        }, {
            code: "prg.proj.msznm",
            label: "!muzykaszytanamiare.pl",
            link: "https://muzykaszytanamiare.pl/",
            tech: ["laravel", "php", "js", "r-project"],
            icon: "!msznm",
        }, {
            code: "prg.proj.projorg",
            label: "!Projekt Organista",
            link: "https://github.com/wpwwhimself/projektOrganista",
            tech: ["php", "js", "react", "html5"],
            icon: "music",
        }, {
            code: "prg.proj.sc",
            label: "!Sous-Chef",
            link: "http://souschef.wpww.pl/",
            tech: ["laravel", "php", "js"],
            icon: "!souschef",
        }, {
            code: "prg.proj.brz",
            label: "!Hydrophilia",
            link: "http://hydrophilia.wpww.pl/",
            tech: ["vuejs", "js"],
            icon: "!hydrophilia",
        }, {
            //TODO wymyślić coś nowego
            code: "prg.proj.ppy",
            // label: "!",
            // link: "",
            tech: ["angular", "js"],
            icon: "question",
        }
    ];
    
    return <Section clickTileFun={() => setPage("Intro")}>
        <h2><FAIcon icon="timeline" /> {__("prg.headings.exp")}</h2>
        <Timeline boxesUp={tmln_contents.education} boxesDown={tmln_contents.jobExperience} />
        
        <h2><FAIcon icon="cog" /> {__("prg.headings.langs")}</h2>
        <div className="flex-right center zoom-icons" style={{fontSize: "2em", marginBottom: "0.5em"}}>
            {technologies.map((icon, ind) => <FAIcon icon={`brands ${icon}`} key={ind} title={icon} />)}
        </div>
        <div className="flex-right wrap center">
        {other_techs.map((app, ind) => 
            <span className="framed" key={ind}>{app}</span>
        )}
        </div>
        
        <h2><FAIcon icon="scroll" /> {__("prg.headings.projects")}</h2>
        <div className="grid-3">
            {projects.map((project) => 
            <TextBox key={project.code}>
                <div className="flex-right center large">
                    <FAIcon icon={project.icon} />
                </div>
                <h2>{__(`${project.code}.name`)}</h2>
                <p>{__(`${project.code}.desc`)}</p>
                <p className="flex-right center ghost">
                    {project.tech.map((icon) => <FAIcon icon={`brands ${icon}`} key={icon} title={icon} />)}
                </p>
                {project.link &&
                <ArrowClickTile label={project.label} fwd={true} clickfun={() => window.location.assign(project.link)} />}
            </TextBox>
            )}
        </div>
        
        <SeeAlso>
        {[
            ["brands github", "https://www.github.com/wpwwhimself/"],
            ["brands linkedin", "https://www.linkedin.com/in/wpwwhimself/"]
        ].map(([icon, link]) => <ClickTile
            icon={icon} small={true} key={icon}
            clickfun={() => window.location.assign(link)} />
        )}
        </SeeAlso>
    </Section>;
}