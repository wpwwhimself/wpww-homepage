import { useContext } from "react";
import { Section } from "../../components/Sections";
import { LangContext } from "../Layout";
import FAIcon from "../../components/FAIcon";
import Timeline from "../../components/Timeline";
import { ClickTile, ArrowClickTile, SeeAlso } from "../../components/ClickTiles";
import "./style.css";
import { TextBox } from "../../components/TextBox";

export function Programista() {
    const {__} = useContext(LangContext);

    const tmln_contents = {
        education: [
            {
                code: "prg.edu.econ",
                placeLink: "https://ue.poznan.pl/",
                span: ["10.2022", null],
                hasSpec: true,
                stack: "R, Python, Git, MongoDB, VBA, SPSS"
            }, {
                code: "prg.edu.math",
                placeLink: "https://wmi.amu.edu.pl/",
                span: ["10.2019", "10.2022"],
                hasSpec: true,
                stack: "R, C++, Gretl, OxMetrics",
            }, {
                code: "prg.edu.it",
                placeLink: "https://zszwolsztyn.pl/",
                span: ["09.2013", "09.2017"],
                stack: "HTML, JS, PHP, SQL",
            }
        ],
        jobExperience: [
            {
                code: "prg.jex.questy",
                placeLink: "https://questy.pl/",
                span: ["08.2022", null],
                stack: "PHP, Symfony, JS, Bootstrap, PostgreSQL, Git, Ubuntu, Docker",
                clients: true,
                readSomeMore: "questy",
            }, {
                code: "prg.jex.foram",
                placeLink: "https://artforma.pl/",
                span: ["08.2017", "09.2019"],
                stack: "HTML, WordPress, Adobe Photoshop",
                readSomeMore: "foram",
            }
        ]
    };

    const technologies = {
        js: 0.8,
        react: 0.6,
        vuejs: 0.5,
        php: 0.85,
        laravel: 0.8,
        symfony: 0.3,
        wordpress: 0.3,
        ".mysql": 0.8,
        ".postgresql": 0.8,
        ".mongodb": 0.4,
        bootstrap: 0.3,
        r_project: 0.8,
        git: 0.75,
        docker: 0.2,
        ubuntu: 0.3,
        python: 0.15,
        "!c_plus_plus": 0.25,
        "!ms_excel": 0.9,
        "!ms_word": 0.95,
        "!adobe_photoshop": 0.9,
        "!adobe_illustrator": 0.8,
    };

    const i18n_langs = {
        PL: 1,
        EN: 0.95,
        DE: 0.6,
        JP: 0.3,
    };

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
            tech: ["laravel", "php", "js"],
            icon: "!msznm",
        }, {
            code: "prg.proj.projorg",
            label: "!Szpiewnik Szybkiego Szukania",
            link: "http://sz3.wpww.pl/",
            tech: ["php", "js", "react", "html5", "laravel"],
            icon: "!sz3",
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
        // }, {
        //     code: "prg.proj.krk",
        //     label: "!Korkulator",
        //     link: "https://github.com/wpwwhimself/korkulator",
        //     tech: ["vuejs", "js"],
        //     icon: "question",
        // }, {
        //     //TODO wymyślić coś nowego
        //     code: "prg.proj.ppy",
        //     // label: "!",
        //     // link: "",
        //     tech: ["angular", "js"],
        //     icon: "question",
        }
    ];
    
    return <Section clickTileFun="/">
        <p className="justify">{__("prg.intro")}</p>

        <h2><FAIcon icon="timeline" /> {__("prg.headings.exp")}</h2>
        <Timeline
            boxesUp={tmln_contents.education} boxesDown={tmln_contents.jobExperience}
            labelUp={__("prg.headings.timeline.up")} labelDown={__("prg.headings.timeline.down")}
            />
        
        <div className="flex-right" style={{ justifyContent: "space-evenly" }}>
            <div>
                <h2><FAIcon icon="cog" /> {__("prg.headings.langs")}</h2>
                <div className="flex-right tech-grid center zoom-icons" style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    {Object.entries(technologies).map(([icon, level], ind) => <div className="container flex-down">
                        <div className="tech-grid-bar" style={{ height: level*70 }} title={level*100}></div>
                        <FAIcon icon={
                            icon.match(/[!\.]/)
                            ? icon
                            : `brands ${icon.replace(/_/g, "-")}`
                        } key={ind} title={icon} />
                    </div>)}
                </div>
            </div>
            <div className="print-only">
                <h2><FAIcon icon="flag" /> {__("alt.whatelse.languages.label")}</h2>
                <div className="flex-right tech-grid center zoom-icons" style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    {Object.entries(i18n_langs).map(([lang, level], ind) => <div className="container flex-down">
                        <div className="tech-grid-bar" style={{ height: level*70 }} title={level*100}></div>
                        <span>{lang}</span>
                    </div>)}
                </div>
            </div>
        </div>
        
        <h2><FAIcon icon="scroll" /> {__("prg.headings.projects")}</h2>
        <div className="grid-3 but-mobile-down but-print-flex-down">
            {projects.map((project) => 
            <TextBox key={project.code} horizontal={true}>
                <div className="flex-right center large">
                    <FAIcon icon={project.icon} />
                </div>
                <h2 class>{__(`${project.code}.name`)}</h2>
                <p>{__(`${project.code}.desc`)}</p>
                <span className="center but-print-right ghost">
                    {project.tech.map((icon) => <FAIcon icon={`brands ${icon}`} key={icon} title={icon} />)}
                    <br className="print-only" />
                    <a className="print-only" href={project.link}>{project.link.replace(/.*\/\/(.*)\//, "$1")}</a>
                </span>
                {project.link &&
                <ArrowClickTile label={project.label} fwd={true} clickfun={project.link} />}
            </TextBox>
            )}
        </div>
        
        <SeeAlso>
        {[
            ["brands github", "https://www.github.com/wpwwhimself/"],
            ["brands linkedin", "https://www.linkedin.com/in/wpwwhimself/"]
        ].map(([icon, link]) => <ClickTile
            icon={icon} small={true} key={icon}
            clickfun={link} />
        )}
        </SeeAlso>
    </Section>;
}

export function Questy() {
    const {__} = useContext(LangContext);
    
    return <Section clickTileFun="/programmer">
        <p>Aaaa</p>
    </Section>;
}

export function Foram() {
    const {__} = useContext(LangContext);
    
    return <Section clickTileFun="/programmer">
        <p>BBB</p>
    </Section>;
}