import { useContext } from "react";
import { Section } from "../../components/Sections";
import FAIcon from "../../components/FAIcon";
import { LangContext } from "../Layout";
import { ArrowClickTile } from "../../components/ClickTiles";
import { TextBox } from "../../components/TextBox";
import { DateSpan } from "../../components/DateSpan";

export function Muzyk(){
    const {__} = useContext(LangContext);

    const bands = [
        {
            code: "mus.bands.dixie",
            link: "https://www.facebook.com/profile.php?id=100060053047728",
            span: ["10.2016", null],
        }, {
            code: "mus.bands.org",
            span: ["09.2021", null],
        }, {
            code: "mus.bands.swietl",
            link: "https://www.facebook.com/profile.php?id=100024867817512",
            span: ["01.2022", null],
        }, {
            code: "mus.bands.wih",
            link: "https://www.facebook.com/orkiestrawihajster",
            span: ["08.2021", null],
        }, {
            code: "mus.bands.grobrass",
            link: "https://www.weselezklasa.pl/ogloszenia-weselne/grobrass-mini-orkiestra-deta-do-zadan-specjalnych,54143/",
            span: ["07.2025", null],
        }, {
            code: "mus.bands.pwod",
            link: "https://www.facebook.com/orkiestrawolsztyn",
            span: ["06.2014", "10.2023"],
        }, {
            code: "mus.bands.az",
            link: "http://audio-z.wpww.pl/",
            span: ["12.2013", "01.2023"],
        }, {
            code: "mus.bands.rr",
            link: "https://www.facebook.com/wrrband",
            span: ["12.2013", "01.2018"],
        },
    ];

    const instruments = "mus.instr";

    const mine = [
        {
            code: "hydrophilia",
            label: "Hydrophilia",
            icon: "!hydrophilia",
            link: "https://hydrophilia.wpww.pl/",
        },
        {
            code: "msznm",
            label: "Muzyka Szyta Na Miarę",
            icon: "!msznm",
            link: "https://muzykaszytanamiare.pl/",
        },
    ];

    return <Section clickTileFun="/">
        <p className="center stagger" style={{ "--stagger-index": 1 }}>{__("mus.intro")}</p>
        
        <h2><FAIcon icon="people-group" /> {__("mus.headings.bands")}</h2>
        <div className="grid-3 but-mobile-down">
        {bands.map((band, ind) =>
            <TextBox key={ind} ghost={band.span[1]} stagger={ind + 2}>
                <p className="ghost">
                    <DateSpan dates={band.span} />
                </p>
                {/* todo zdjęcia zespołów */}
                <h2>{__(`${band.code}.name`)}</h2>
                <p>{__(`${band.code}.instruments`)} • {__(`${band.code}.genre`)}</p>
                {band.link && <ArrowClickTile label="link" fwd={true} clickfun={band.link} />}
            </TextBox>
        )}
        </div>

        <h2><FAIcon icon="guitar" /> {__("mus.headings.instr")}</h2>
        <div className="flex-right wrap center">
        {__(instruments, true)?.map((instr, ind) => 
            <span className="framed stagger" style={{ "--stagger-index": ind + 2 + bands.length }} key={ind}>{instr}</span>
        )}
        </div>

        <h2><FAIcon icon="scroll" /> {__("mus.headings.mine")}</h2>
        <div className="grid-2 but-mobile-down">
        {mine.map((el, ind) => 
            <TextBox key={ind} stagger={ind + 2 + bands.length + __(instruments, true)?.length}>
                <div className="flex-right center large">
                    <FAIcon icon={el.icon} />
                </div>
                <h2>{__(`mus.mine.${el.code}.heading`)}</h2>
                <p>{__(`mus.mine.${el.code}.about`)}</p>
                {el.link &&
                <ArrowClickTile label={`mus.mine.${el.code}.label`} fwd={true} clickfun={el.link} />}
            </TextBox>
        )}
        </div>

        <h2><FAIcon icon="graduation-cap" /> {__("mus.headings.edu")}</h2>
        <h3 class="stagger" style={{ textAlign: "center", "--stagger-index": 2 + bands.length + __(instruments, true)?.length + mine.length }}>{__("mus.edu.place")} <small className="ghost"><DateSpan dates={["09.2011", "07.2015"]} /></small></h3>
    </Section>;
}