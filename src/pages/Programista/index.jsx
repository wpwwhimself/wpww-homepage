import { useContext } from "react";
import { Section } from "../../components/Sections";
import { LangContext } from "../Layout";
import FAIcon from "../../components/FAIcon";
import Timeline from "../../components/Timeline";
import { ClickTile, ArrowClickTile, SeeAlso } from "../../components/ClickTiles";
import "./style.css";
import { TextBox } from "../../components/TextBox";
import { DateSpan } from "../../components/DateSpan";

const jobExperience = [
    {
        code: "prg.jex.promodruk",
        placeLink: "https://promodruk.pl/",
        span: ["08.2023", null],
        stack: "PHP, Laravel, AlpineJS, ...",
        shiftColumn: 1,
        icon: "!promodruk",
    }, {
        code: "prg.jex.questy",
        placeLink: "https://questy.pl/",
        span: ["08.2022", null],
        stack: "PHP, Symfony, JS, Bootstrap, PostgreSQL, Git, Ubuntu, Docker",
        clients: true,
        readSomeMore: "questy",
        icon: "!questy",
    }, {
        code: "prg.jex.foram",
        placeLink: "https://artforma.pl/",
        span: ["08.2017", "09.2019"],
        stack: "HTML, WordPress, Adobe Photoshop",
        readSomeMore: "foram",
        icon: "!foram",
    }
];

export function Programista() {
    const {__} = useContext(LangContext);

    const tmln_contents = {
        education: [
            {
                code: "prg.edu.econ",
                placeLink: "https://ue.poznan.pl/",
                span: ["10.2022", "07.2024"],
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
        jobExperience: jobExperience,
    };

    const technologies = {
        primary: {
            php: 0.85,
            laravel: 0.8,
            js: 0.8,
            vuejs: 0.7,
            ".mysql": 0.8,
            git: 0.75,
            ubuntu: 0.6,
        },
        secondary: {
            symfony: 0.3,
            ".postgresql": 0.8,
            react: 0.6,
            angular: 0.1,
            ".mongodb": 0.4,
            r_project: 0.8,
            "!sas": 0.6,
            python: 0.4,
            docker: 0.4,
            "!c_sharp": 0.25,
            "!latex": 0.95,
            // "!markdown": 0.95,
            "!ms_word": 0.95,
            "!ms_excel": 0.9,
            "!adobe_photoshop": 0.9,
            "!adobe_illustrator": 0.8,
        },
    };

    const i18n_langs = {
        PL: 1,
        EN: 0.95,
        DE: 0.7,
        JP: 0.3,
    };

    const projects = [
        {
            code: "prg.proj.msznm",
            label: "!Muzyka Szyta Na Miarę",
            link: "https://github.com/wpwwhimself/msznm",
            tech: ["laravel", "vuejs"],
            icon: "!msznm",
        }, {
            code: "prg.proj.projorg",
            label: "!Szpiewnik Szybkiego Szukania",
            link: "https://github.com/wpwwhimself/szpiewnik-szybkiego-szukania-3",
            tech: ["laravel", "react"],
            icon: "!sz3",
        }, {
            code: "prg.proj.promodruk",
            label: "!Promodruk Suite",
            link: "https://github.com/wpwwhimself/promodruk-suite",
            tech: ["laravel", "js"],
            icon: "!promodruk",
        }, {
            code: "prg.proj.sc",
            label: "!Sous Chef",
            link: "https://github.com/wpwwhimself/souschef-2",
            tech: ["laravel", "react"],
            icon: "!souschef",
        }, {
            code: "prg.proj.krk",
            label: "!Tithree",
            link: "https://github.com/wpwwhimself/tithree",
            tech: ["vuejs"],
            icon: "!t3",
        }, {
            code: "prg.proj.homepage",
            label: "!wpww.pl",
            link: "https://github.com/wpwwhimself/wpww-homepage",
            tech: ["react"],
            icon: "!logo_blue",
        }, {
            code: "prg.proj.brz",
            label: "!Brzoskwinia",
            link: "https://github.com/wpwwhimself/brzoskwinia",
            tech: ["php", "js"],
            icon: "!brzoskwinia",
        }, {
            code: "prg.proj.hh",
            label: "!Househunter",
            link: "https://github.com/wpwwhimself/househunter",
            tech: ["laravel", "angular"],
            icon: "!h2",
            wip: true,
        }, {
            code: "prg.proj.cc",
            // label: "!",
            link: "",
            tech: ["vuejs"],
            icon: "!c2",
            wip: true,
        }
    ];

    return <Section clickTileFun="/">
        <p className="center stagger" style={{ "--stagger-index": 2 }}>{__("prg.intro")}</p>

        <div className="flex-right" style={{ justifyContent: "space-evenly" }}>
            <div>
                <h2 className="stagger" style={{ "--stagger-index": 3 }}><FAIcon icon="cog" /> {__("prg.headings.langs")}</h2>
                <div className="flex-right tech-grid center zoom-icons stagger" style={{fontSize: "2em", marginBottom: "0.5em", "--stagger-index": 4, }}>
                    {Object.entries(technologies)
                        .map(([division, techs]) => <>
                            {Object.entries(techs).map(([icon, level]) => <div className={`flex-down center ${division === 'secondary' ? 'ghost' : ''}`} key={icon}>
                                <div className="tech-grid-bar" style={{ height: level*70 }} title={level*100}></div>
                                    <FAIcon icon={
                                        icon.match(/[!.]/)
                                        ? icon
                                        : `brands ${icon.replace(/_/g, "-")}`
                                    } title={icon} />
                                </div>)
                            }
                        </>)
                    }
                </div>
            </div>
            <div className="print-only">
                <h2><FAIcon icon="flag" /> {__("alt.whatelse.languages.label")}</h2>
                <div className="flex-right tech-grid center zoom-icons" style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    {Object.entries(i18n_langs).map(([lang, level], ind) => <div className="container flex-down" key={ind}>
                        <div className="tech-grid-bar" style={{ height: level*70 }} title={level*100}></div>
                        <span>{lang}</span>
                    </div>)}
                </div>
            </div>
        </div>

        <h2 className="stagger" style={{ "--stagger-index": 5 }}><FAIcon icon="scroll" /> {__("prg.headings.projects")}</h2>
        <div className="grid-3 but-mobile-down but-print-grid-2">
            {projects.map((project, i) => 
            <TextBox key={project.code} horizontal={true} ghost={project.wip} printhide={project.wip} stagger={i + 6}>
                <div className="flex-right center large">
                    <FAIcon icon={project.icon} />
                </div>
                <h2>{__(`${project.code}.name`)}{project.wip && "🚧"}</h2>
                <div className="flex-down">
                    <span className="center but-print-left">{__(`${project.code}.desc`)}</span>
                    <p className="flex-right center but-print-left ghost" style={{ gap: "0.5em" }}>
                        <span>
                            {project.tech.map((icon) => <FAIcon icon={`brands ${icon}`} key={icon} title={icon} />)}
                        </span>
                        {project.link && <a className="print-only" href={project.link}>
                            <FAIcon icon="brands github" />
                            {project.link.replace(/.*\/\/.*\/wpwwhimself(.*)/, "$1")}
                        </a>}
                    </p>
                </div>
                {project.link &&
                <ArrowClickTile label={project.label} fwd={true} clickfun={project.link} />}
            </TextBox>
            )}
        </div>

        <h2 className="stagger" style={{ "--stagger-index": 7 + projects.length }}><FAIcon icon="timeline" /> {__("prg.headings.exp")}</h2>
        <Timeline
            boxesUp={tmln_contents.education} boxesDown={tmln_contents.jobExperience}
            labelUp={__("prg.headings.timeline.up")} labelDown={__("prg.headings.timeline.down")}
            stagger={8 + projects.length}
            />
        
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

export function ReadSomeMore({code}){
    const {__} = useContext(LangContext);
    const job = jobExperience.filter(el => el.code === `prg.jex.${code}`)[0];
    const rsm = __(`${job.code}.rsm`);

    return <Section clickTileFun="/programmer" title={__(`${job.code}.place`)}>
        <div className="flex-right center">
            <TextBox stagger={2}>
                <h2>{__(`${job.code}.name`)}</h2>
                <i className="ghost"><DateSpan dates={job.span} /></i>
            </TextBox>
        </div>
        {
            Array.isArray(rsm)
            ? rsm.map((item, ind) => 
                (!Array.isArray(item))
                ? <p key={ind} className="justify stagger" style={{ "--stagger-index": ind + 3 }}>{item}</p>
                : <ul key={ind} className="stagger" style={{ "--stagger-index": ind + 3 }}>{item.map((text, indd) => <li key={indd} className="justify">{text}</li>)}</ul>
            )
            : rsm
        }
        <div className="stagger" style={{ "--stagger-index": rsm.length + 3 }}>
            <SeeAlso>
                <ClickTile icon={`!${job.readSomeMore}`} small={true} clickfun={job.placeLink} />
            </SeeAlso>
        </div>
    </Section>;
}
