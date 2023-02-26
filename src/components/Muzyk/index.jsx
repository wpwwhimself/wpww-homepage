import { useContext } from "react";
import { PageContext } from "../BigBuildingBlocks";
import { Section } from "../Sections";
import FAIcon from "../FAIcon";
import { LangContext } from "../../App";
import { ClickTile, ArrowClickTile, SeeAlso } from "../ClickTiles";
import { TextBox } from "../TextBox";
import { DateSpan } from "../DateSpan";

export function Muzyk(){
    const {setPage} = useContext(PageContext);
    const {__} = useContext(LangContext);

    const bands = [
        {
            code: "mus.bands.dixie",
            link: "https://www.facebook.com/profile.php?id=100060053047728",
            span: ["10.2016", null],
        }, {
            code: "mus.bands.wih",
            link: "https://www.facebook.com/orkiestrawihajster",
            span: ["08.2021", null],
        }, {
            code: "mus.bands.pwod",
            link: "https://www.facebook.com/orkiestrawolsztyn",
            span: ["06.2014", null],
        }, {
            code: "mus.bands.org",
            span: ["09.2021", null],
        }, {
            code: "mus.bands.swietl",
            link: "https://www.facebook.com/profile.php?id=100024867817512",
            span: ["01.2022", null],
        }, {
            code: "mus.bands.az",
            link: "http://audio-z.wpww.pl/",
            span: ["12.2013", "01.2023"],
        }, {
            code: "mus.bands.rr",
            link: "https://www.facebook.com/wrrband",
            span: ["12.2013", "01.2023"],
        },
    ];

    const instruments = "mus.instr";

    //TODO sub-sekcja "moja własna działalność"
    //TODO sub-sekcja "moja twórczość"

    return <Section clickTileFun={() => setPage("Intro")}>
        <h2><FAIcon icon="people-group" /> {__("mus.headings.bands")}</h2>
        <div className="grid-3 but-mobile-down">
        {bands.map((band, ind) =>
            <TextBox key={ind} ghost={band.span[1]}>
                <p className="ghost">
                    <DateSpan dates={band.span} />
                </p>
                {/* todo zdjęcia zespołów */}
                <h2>{__(`${band.code}.name`)}</h2>
                <p>{__(`${band.code}.instruments`)} • {__(`${band.code}.genre`)}</p>
                {band.link && <ArrowClickTile label="link" fwd={true} clickfun={() => window.location.assign(band.link)} />}
            </TextBox>
        )}
        </div>

        <h2><FAIcon icon="guitar" /> {__("mus.headings.instr")}</h2>
        <div className="flex-right wrap center">
        {__(instruments).map((instr, ind) => 
            <span className="framed" key={ind}>{instr}</span>
        )}
        </div>

        <h2><FAIcon icon="graduation-cap" /> {__("mus.headings.edu")}</h2>
        <h3 style={{ textAlign: "center" }}>{__("mus.edu.place")} <small className="ghost"><DateSpan dates={["09.2011", "07.2015"]} /></small></h3>

        <SeeAlso>
        {[
            ["!msznm", "https://muzykaszytanamiare.pl/"],
            ["!hydrophilia", "http://hydrophilia.wpww.pl/"]
        ].map(([icon, link]) => <ClickTile
            icon={icon} small={true} key={icon}
            clickfun={() => window.location.assign(link)} />
        )}
        </SeeAlso>
    </Section>;
}