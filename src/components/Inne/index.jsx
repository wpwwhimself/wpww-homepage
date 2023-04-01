import { useContext } from "react";
import { Section } from "../Sections";
import "./style.css";
import FAIcon from "../FAIcon";
import { LangContext } from "../../pages/Layout";
import { TextBox } from "../TextBox";
import { ArrowClickTile } from "../ClickTiles";

const things_i_do = [
    {
        code: "languages",
        icon: "language",
    },
    {
        code: "drawing",
        icon: "pen-ruler",
        link: "http://wpww.pl/tarot/",
        label: "alt.whatelse.drawing.tarot",
    },
    //TODO więcej pomysłów, co robię
];

const media = [
    "Warhammer 40K",
    "Drakensang",
    "Rammstein",
    "Darkkmane",
    "Don't Starve",
    "Elite Dangerous",
    "Starcraft",
    "Captain Disillusion",
    "CGP Grey",
    "The Office",
    "..."
];

export function Inne(){
    const {__} = useContext(LangContext);

    return <Section clickTileFun="/">
        <h2><FAIcon icon="bicycle" /> {__("alt.headings.whatelse")}</h2>
        <div className="grid-3 but-mobile-down">
        {things_i_do.map(bit => 
            <TextBox>
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
        
        <h2><FAIcon icon="tv" /> {__("alt.headings.favmedia")}</h2>
        <div className="flex-right wrap center">
            {media.map(bit => 
                <span className="framed">{bit}</span>
            )}
        </div>
    </Section>;
}