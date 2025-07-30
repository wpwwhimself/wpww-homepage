import { useContext } from "react";
import { Section } from "../../components/Sections";
import "./style.css";
import FAIcon from "../../components/FAIcon";
import { LangContext } from "../Layout";
import { TextBox } from "../../components/TextBox";
import { ArrowClickTile } from "../../components/ClickTiles";

const things_i_do = [
    {
        code: "languages",
        icon: "language",
    },
    {
        code: "drawing",
        icon: "pen-ruler",
        label: "alt.whatelse.drawing.tarot",
        link: "/others/tarot",
    },
    //TODO więcej pomysłów, co robię
];

const media = [
    "Adam Neely",
    "Aging Wheels",
    "Bricky",
    "Captain Disillusion",
    "CGP Grey",
    "Darkkmane",
    "Don't Starve",
    "Drakensang",
    "Elite Dangerous",
    "Lockpicking Lawyer",
    "Magicka",
    "Rammstein",
    "Starcraft",
    "Tantacrul",
    "Technology Connections",
    "The Office",
    "Warhammer 40K",
    "..."
];

export function Inne(){
    const {__} = useContext(LangContext);

    return <Section clickTileFun="/">
        <h2 className="stagger" style={{ "--stagger-index": 2 }}><FAIcon icon="bicycle" /> {__("alt.headings.whatelse")}</h2>
        <div className="grid-3 but-mobile-down">
        {things_i_do.map((bit, i) => 
            <TextBox key={bit.code} stagger={i + 3}>
                <div className="flex-right center large">
                    <FAIcon icon={bit.icon} />
                </div>
                <h2>{__(`alt.whatelse.${bit.code}.label`)}</h2>
                <p>{__(`alt.whatelse.${bit.code}.desc`)}</p>
                {bit.link &&
                <ArrowClickTile label={bit.label} fwd={true} clickfun={bit.link} />}
            </TextBox>
        )}
        </div>
        
        <h2 className="stagger" style={{ "--stagger-index": things_i_do.length + 4 }}><FAIcon icon="tv" /> {__("alt.headings.favmedia")}</h2>
        <div className="flex-right wrap center">
            {media.map((bit, i) =>
                <span className="framed stagger" style={{ "--stagger-index": i + 5 + things_i_do.length }} key={i}>{bit}</span>
            )}
        </div>
    </Section>;
}