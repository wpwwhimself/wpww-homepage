import { createContext, useContext } from "react";
import { LangContext } from "../../pages/Layout";
import FAIcon from "../FAIcon";
import { Logo } from "../Logo";
import "./style.css"

export const PageContext = createContext();

export function Header(){
  const {__} = useContext(LangContext);

  return (
    <header className="flex-down center but-print-flex-right">
      <img
        className="circle mobile-only print-only" 
        src="/pics/profile_pic.jpg"
        alt="profile"
        />
      <div className="flex-down">
        <div className="flex-right center but-mobile-down">
          <h1 className="print-only">mgr</h1>
          <h1>Wojciech</h1>
          <img
            className="circle mobile-hide print-hide" 
            src="/pics/profile_pic.jpg"
            alt="profile"
          />
          <h1>Przybyła</h1>
        </div>
        <h2 className="print-only"><i className="fa-solid fa-keyboard"></i> {__("pages.Programista")}</h2>
      </div>
    </header>
  );
}

export function Footer(){
  const footer_links = [
    ["fa-solid fa-envelope", "mailto:contact@wpww.pl", "contact@wpww.pl"],
    ["fa-solid fa-phone", "callto:+48530268000", "+48 530 268 000"],
    ["fa-solid fa-house", "https://goo.gl/maps/EjbtANTH7tt6LET47", "Łąkie 62, 62-068 Łąkie"],
  ].map(([icon, link, label]) => 
    <a href={link} key={icon}><i className={icon}></i> {label}</a>
  );
  const social_links = [
    ["fa-brands fa-facebook", "https://www.facebook.com/wpwwhimself/"],
    ["fa-brands fa-github", "https://www.github.com/wpwwhimself/"],
    ["fa-brands fa-linkedin", "https://www.linkedin.com/in/wpwwhimself/"],
    ["fa-brands fa-instagram", "https://www.instagram.com/wpwwhimself/"],
  ].map(([icon, link]) =>
    <a href={link} key={icon}><i className={icon}></i></a>
  )

  const {__, setLang} = useContext(LangContext);

  const today = new Date();

  return(
    <footer>
      <div className="flex-right but-mobile-down center">
        <Logo />
        <div id="end-bar" className="flex-down">
          <h2>Wojciech Przybyła</h2>
          <p className="print-hide">{__("footer_by_me")}</p>
          <div className="flex-right">
            <a href="https://creativecommons.org/licenses/by-sa/3.0/pl/">
              <i className="fa-brands fa-creative-commons"></i>
              <i className="fa-brands fa-creative-commons-by"></i>
              <i className="fa-brands fa-creative-commons-sa"></i>
            </a> 2018 – {today.getFullYear()}
            <span className="print-hide">
              <FAIcon icon="globe" />
            </span>
            {["PL", "EN", "DE", "JP"].map((lang_opt) => 
              <span key={lang_opt}
                className="clickable print-hide"
                onClick={() => setLang(lang_opt)}
                >
                {lang_opt}
              </span>)}
          </div>
        </div>
      </div>
      <div id="rodo" className="print-only ghost">
        {__("rodo").map((line, i) =>
          <p key={i}>{line}</p>
        )}
      </div>
      <div id="footer-links">
        {footer_links}
        <div className="flex-right">
          {social_links}
          <span>wpwwhimself</span>
        </div>
      </div>
    </footer>
  );
}
  