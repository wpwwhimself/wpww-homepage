import { useState, createContext, useContext } from "react";
import { LangContext } from "../../App";
import FAIcon from "../FAIcon";
import { Logo } from "../Logo";
import { Intro, Programista, TBAPage } from "../Sections";
import "./style.css"

export const PageContext = createContext();

export const PageIcons = {
  Intro: "house-chimney",
  Programista: "keyboard",
  Muzyk: "music",
  Inne: "ellipsis",
};

export function Header(){
  return (
    <header className="flex-down center">
      <div className="flex-right center">
        <h1>Wojciech</h1>
        <img
          className="circle" 
          src="/pics/profile_pic.jpg"
          alt="profile"
        />
        <h1>Przybyła</h1>
      </div>
    </header>
  );
}

export function Footer(){
  const footer_links = [
    ["fa-solid fa-envelope", "mailto:contact@wpww.pl", "contact@wpww.pl"],
    ["fa-solid fa-phone", "callto:+48530268000", "+48 530 268 000"],
    ["fa-solid fa-house", "https://goo.gl/maps/EjbtANTH7tt6LET47", "Łąkie 62, 62-068 Łąkie"],
    ["fa-brands fa-facebook", "https://www.facebook.com/wpwwhimself/", "wpwwhimself"],
    ["fa-brands fa-github", "https://www.github.com/wpwwhimself/", "wpwwhimself"],
    ["fa-brands fa-linkedin", "https://www.linkedin.com/in/wpwwhimself/", "wpwwhimself"],
    ["fa-brands fa-instagram", "https://www.instagram.com/wpwwhimself/", "wpwwhimself"],
  ].map(([icon, link, label]) => 
    <a href={link} key={icon}><i className={icon}></i> {label}</a>
  );

  const {__, setLang} = useContext(LangContext);

  return(
    <footer>
      <div className="flex-right center">
        <Logo />
        <div id="end-bar" className="flex-down">
          <h2>Wojciech Przybyła</h2>
          <p>{__("footer_by_me")}</p>
          <p><a href="https://creativecommons.org/licenses/by-sa/3.0/pl/">© CC BY-SA 3.0</a> 2018 – 2022</p>
          <div id="lang" className="flex-right">
            <FAIcon icon="globe" />
            {["PL", "EN", "DE", "JP"].map((lang_opt) => 
              <span key={lang_opt}
                className="clickable"
                onClick={() => setLang(lang_opt)}
                >
                {lang_opt}
              </span>)}
          </div>
        </div>
      </div>
      <div id="footer-links">{footer_links}</div>
    </footer>
  );
}
  
export function Body(){
  const [page, setPage] = useState("Intro");


  let Page;
  switch(page){
    case "Intro": Page = <Intro />; break;
    case "Programista": Page = <Programista />; break;
    default: Page = <TBAPage />; break;
  }

  return(
    <div className="main-wrapper">
      <PageContext.Provider value={{page, setPage}}>
        {Page}
      </PageContext.Provider>
    </div>
  );
}

export function Section(props){
  const {page} = useContext(PageContext);
  const {__} = useContext(LangContext);

  return(
    <div>
      <div className="section-header flex-right center">
        <h1>
          <i className={`fa-solid fa-${PageIcons[page]}`}></i> {__("pages."+page)}
        </h1>
      </div>
      {props.children}
    </div>
  )
}