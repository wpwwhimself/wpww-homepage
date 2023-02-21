import { useState } from "react";
import { Logo } from "./Logo";
import { Intro, Programista } from "./Sections";

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

  return(
    <footer>
      <Logo />
      <div id="end-bar">
        <h2>Wojciech Przybyła</h2>
        <p>Strona zbudowana w całości przeze mnie</p>
        <p><a href="https://creativecommons.org/licenses/by-sa/3.0/pl/">© CC BY-SA 3.0</a> 2018 – 2022</p>
      </div>
      <div id="lang">
        <i className="fa-solid fa-globe"></i>
        🚧
      </div>
      <div id="footer-links">{footer_links}</div>
    </footer>
  );
}
  
export function Body(){
  const [page, setPage] = useState("intro");


  let Page;
  switch(page){
    case "programista": Page = <Programista setPage={setPage} />; break;
    default: Page = <Intro setPage={setPage} />; break;
  }

  return(
    <div className="main-wrapper">
      {Page}
    </div>
  );
}