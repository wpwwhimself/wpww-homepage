import { useContext } from "react";
import { Section } from "../../components/Sections";
import { LangContext } from "../Layout";
import FAIcon from "../../components/FAIcon";
import { TextBox } from "../../components/TextBox";
import { ClickTile, SeeAlso } from "../../components/ClickTiles";
import "./style.css";

export function Hydrophilia() {
  const {__} = useContext(LangContext);

  const i18n = "mus.mine.hydrophilia.details.";

  const about = __(i18n+"about", true);
  const albums = [
    {
      code: "www",
      name: "What went wrong",
      dates: "2021~",
      tracks: [
        "To Heavens",
        "She's dead",
        "Jagged lines",
        "Seconds after",
        "Space",
        "Childish life",
        "Unsterblich",
      ],
    },
    {
      code: "litm",
      name: "Locked in the moment",
      dates: "2019-2020",
      tracks: [
        "Afloat",
        "Ziółko",
        "Elegy",
        "Eimer der Gleichgültigkeit",
        "Final Stand",
        "I dream about",
        "In midair",
        "Before it's my time",
      ],
    },
    {
      code: "yume",
      name: "Yume",
      dates: "2018-2019",
      tracks: [
        "初めて",
        "全て",
        "夢",
        "足りない",
        "昨夜の吹雪",
        "次の歌",
        "まだ",
      ],
    },
    {
      code: "pct",
      name: "Peccata",
      dates: "2018",
      tracks: [
        "Sum Peccator",
        "Superbia",
        "Avaritia",
        "Luxuria",
        "Invidia",
        "Gula",
        "Ira",
        "Acedia",
        "Poenitentia",
      ],
    },
    {
      code: "moabn",
      name: "Mass on a blue note",
      dates: "2016-2017",
      tracks: [
        "Bogurodzica",
        "Niechaj zstąpi Duch Twój",
        "Czekam na Ciebie",
        "Wiele jest serc",
        "Golgota",
        "Wszystko Tobie oddać pragnę",
        "Pójdźcie do mnie wszyscy",
        "Dzięki Ci, Panie",
        "Z dawna Polski Tyś królową",
        "Nie było miejsca dla Ciebie",
      ],
    },
    {
      code: "eia",
      name: "Everyday I am",
      dates: "2017",
      tracks: [
        "Prologue",
        "Broke",
        "Gregarious",
        "Feeble",
        "Alone",
        "Exploited",
        "Confined",
        "Dubious",
        "Epilogue",
      ],
    },
    {
      code: "lmns",
      name: "Luminescence",
      dates: "2016-2017",
      tracks: [
        "Letter",
        "Zu schnell",
        "I'm not the one",
        "The Curse",
        "Lonesome March",
        "Rain",
        "Letter Two",
      ],
    },
    {
      code: "ta",
      name: "Torn Apart",
      dates: "2015",
      tracks: [
        "To Heavens",
        "Storm of Sorrow",
        "Anymore",
        "Thousand Miles",
        "Final Stand",
        "Left to die",
      ],
    },
    {
      code: "ricnt",
      name: "Reincarnation",
      dates: "2012-2014",
      tracks: [
        "Through my soul",
        "Valkyrie",
        "Przepraszam",
        "Pamiętaj",
        "Good day",
        "Bo Ty",
      ],
    },
    {
      code: "lmum",
      name: "Łosiowa Muzyka UltraMusic",
      dates: "2011~",
      tracks: [
        "Never",
      ],
    },
    {
      code: "lmra",
      name: "Łosiowa Muzyka ReActive",
      dates: "2011",
      tracks: [
        "Kocham Cię",
        "Pamiętaj",
        "Bo Ty",
        "Przepraszam",
        "Connection",
        "My rock",
        "4 peace",
      ],
    },
    {
      code: "ocbt",
      serious: false,
      name: "O czym by tu",
      dates: "2019~",
      tracks: [
        "Bredota",
        "Oddaj",
        "Zbulwersowany pies",
        "Szarmancki dzik",
        "Nie umiem",
        "Beztroska foka",
      ],
    },
    {
      code: "sp",
      serious: false,
      name: "Śpiewnik Pasieczny",
      dates: "2018~",
      tracks: [
        "Samotny sprzedawca tapet",
        "Łukasz",
        "Sześćdziesiąt sześć",
      ],
    },
    {
      code: "gf",
      serious: false,
      name: "Giga Figa",
      dates: "2018~",
      tracks: [
        "Ty jesteś moim Panem",
        "Oblej mnie kakao",
        "Wylany Sok - Wylane Łzy",
        "Urna Namiętności",
        "Nie ufaj gimbusce",
      ],
    },
  ];

  return <Section clickTileFun="/musician">
    <h2 className="stagger" style={{ "--stagger-index": 2 }}>
      <FAIcon icon="comment" /> {__(i18n+"headings.about")}
    </h2>
    {about.map((p, i) =>
      <p key={i} className="stagger" style={{ "--stagger-index": i + 3 }}>{p}</p>
    )}

    <h2 className="stagger" style={{ "--stagger-index": about.length + 4 }}>
      <FAIcon icon="compact-disc" /> {__(i18n+"headings.albums")}
    </h2>

    <div className="grid-3">
    {albums.sort((a, b) => a.dates < b.dates).map((album, i) =>
      <TextBox key={i} stagger={i + about.length + 5}
        ghost={album.serious === false}
      >
        <div className="flex-down center">
          <img src={`https://hydrophilia.wpww.pl/album_pics/${album.code}.png`} alt={album.name} className="album-cover" />
          <h2>{album.name}</h2>
          <p className="ghost">{album.dates}</p>
        </div>
        <p>{__(i18n+"album-details."+album.code)}</p>
        <ol>
          {album.tracks.map((track, ii) =>
            <li key={ii}>{track}</li>
          )}
        </ol>
      </TextBox>
    )}
    </div>

    <SeeAlso>
      <ClickTile icon="brands youtube" small={true} clickfun="https://www.youtube.com/@hydrophilia" />
      <ClickTile icon="music" small={true} clickfun="https://songs.wpww.pl/" />
    </SeeAlso>
  </Section>;
}
