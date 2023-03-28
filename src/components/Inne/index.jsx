import { useContext } from "react";
import { Section } from "../Sections";
import "./style.css";
import FAIcon from "../FAIcon";
import { LangContext } from "../../pages/Layout";
import { TextBox } from "../TextBox";
import { SeeAlso, ClickTile } from "../ClickTiles";

const things_i_do = [
    {
        code: "languages",
        icon: "language",
    },
    {
        code: "drawing",
        icon: "pen-ruler",
    },
    //TODO więcej pomysłów, co robię
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
            </TextBox>
        )}
        </div>
        
        <SeeAlso>
        {[
            // ["!tarot", "https://www.github.com/wpwwhimself/"], //TODO ikona i link do tarota
        ].map(([icon, link]) => <ClickTile
            icon={icon} small={true} key={icon}
            clickfun={link} />
        )}
        </SeeAlso>
        
        <h2><FAIcon icon="tv" /> {__("alt.headings.favmedia")}</h2>
        <p>🚧 TBA 🚧</p>
    </Section>;
}