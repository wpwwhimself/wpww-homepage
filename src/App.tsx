import { createContext, useState } from 'react';
import { Header, Footer, Body } from './components/BigBuildingBlocks/BigBuildingBlocks';
import './App.css';

import PL from "./i18n/PL.json";
import EN from "./i18n/EN.json";
import DE from "./i18n/DE.json";
import JP from "./i18n/JP.json";

export const LangContext = createContext({});

function App() {
  const [lang, setLang] = useState("PL");

  let i18n: any;
  switch(lang){
    case "EN": i18n = EN; break;
    case "DE": i18n = DE; break;
    case "JP": i18n = JP; break;
    default: i18n = PL;
  }
  /**
   * Translation engine. Nesting possible with ".", use "!" to override
   * @param index 
   * @returns string
   */
  function __(index: string){
    if(index.substring(0,1) === "!") return index.substring(1);

    let i18n_obj = i18n;
    for(let level of index.split(".")){
      i18n_obj = i18n_obj[level];
      if(!i18n_obj) return "🔥TRANSLATION MISSING🔥";
      if(typeof i18n_obj === "string" || Array.isArray(i18n_obj)) return i18n_obj;
    }
  }

  return (
    <div className="App">
      <LangContext.Provider value={{__, setLang}}>
        <Header />
        <div id="main-wrapper">
          <Body />
        </div>
        <Footer />
      </LangContext.Provider>
    </div>
  );
}

export default App;
