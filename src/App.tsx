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
  function __(index: string){
    const error = "🔥TRANSLATION MISSING🔥";
    return (
      (index.match(/\./)) ?
      (
        (i18n[index.split(".")[0]] === undefined) ?
        error :
        i18n[index.split(".")[0]][index.split(".")[1]]
      ) :
      i18n[index]
    ) ?? error;
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
