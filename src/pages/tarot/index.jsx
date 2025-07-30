import { useContext } from "react";
import { LangContext } from "../Layout";
import { Section } from "../../components/Sections";
import "./style.css"
import { ClickTile, SeeAlso } from "../../components/ClickTiles";

export function Tarot(){
  const {__} = useContext(LangContext);

  const deck = {
    minor: {
      suits: ["miecze", "kielichy", "berła", "monety"],
      count: 14,
    },
    major: {
      suits: ["taroty"],
      count: 22,
    }
  }

  let cards = [];
  for (let d of Object.values(deck)) {
    for (let suit of d.suits) {
      for (let i = 1; i <= d.count; i++) {
        cards.push(`https://raw.githubusercontent.com/wpwwhimself/tarot-deck/master/kompletandos/pdftoimage/c${suit}/c${suit}-${i.toString().padStart(2, "0")}.jpg`);
      }
    }
  }

  return <Section clickTileFun="/others">
      <div className="flex-right center stagger" style={{ "--stagger-index": 2 }}>
        <ClickTile icon="shopping-cart" small={true} label={__("alt.whatelse.drawing.tarot")} clickfun="https://www.makeplayingcards.com/sell/marketplace/minimalist-tarot-deck.html" />
      </div>

      <div id="tarot-gallery" className="flex-right wrap center">
        {cards.map((card, i) => <div className="stagger" style={{ "--stagger-index": i + 3 }} key={i}>
          <img src={card} alt="card" />
        </div>)}
      </div>
      
  </Section>;
}