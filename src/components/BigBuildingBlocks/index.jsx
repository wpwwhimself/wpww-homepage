import { createContext, useContext } from "react";
import { LangContext } from "../../pages/Layout";
import FAIcon from "../FAIcon";
import { Logo } from "../Logo";
import "./style.css"
import i18n from "../../i18n/i18n.json";

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

      <HeaderBaubles />
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
            {i18n.available_languages.map((lang_opt, i) => 
              <span key={i}
                className="clickable print-hide"
                onClick={() => setLang(i)}
                >
                {lang_opt}
              </span>)}
          </div>
        </div>
      </div>
      <div id="rodo" className="print-only ghost">
        {__("rodo", true)?.map((line, i) =>
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

function HeaderBaubles() {
  return <>
    <div className="bauble left">
      <div className="high">
        <div className="dark"></div>
        <div className="light"></div>
        <div className="dark"></div>
        <div className="empty"></div>
        <div className="light"></div>
        <div></div>
      </div>
      <div className="low">
        <div className="dark"></div>
        <div className="light"></div>
        <div className="dark"></div>
      </div>
    </div>
    <div className="bauble right">
      <div className="high">
        <div className="dark"></div>
        <div className="light"></div>
        <div className="dark"></div>
        <div className="empty"></div>
        <div className="light"></div>
        <div></div>
      </div>
      <div className="low">
        <div className="dark"></div>
        <div className="light"></div>
        <div className="dark"></div>
      </div>
    </div>
  </>;
}
