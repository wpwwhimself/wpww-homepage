import { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Header, Footer } from '../components/BigBuildingBlocks';

import i18n from "../i18n/i18n.json";

export const LangContext = createContext({});

export function Layout(){
  const [lang, setLang] = useState(0);

  /**
   * Translation engine. Nesting possible with ".", use "!" to override
   * @param index 
   * @param expect_array false by default, if on and after failure returns undefined instead of error string
   * @returns string
   */
  function __(index, expect_array = false){
    if(index.substring(0,1) === "!") return index.substring(1);

    let i18n_obj = i18n;
    try {
      for (let level of index.split(".")){
        i18n_obj = i18n_obj[level];
        if (!i18n_obj) throw new Error("TRANSLATION MISSING");
        if (!Array.isArray(i18n_obj)) continue;
  
        i18n_obj = i18n_obj[lang];
        if (!i18n_obj) throw new Error("TRANSLATION MISSING");

        return i18n_obj;
      }
    } catch (error) {
      return (expect_array)
        ? undefined
        : <span className="ghost" title={index}>🔥TRANSLATION MISSING🔥</span>;
    }
  }

  return (
    <div className="App">
      <LangContext.Provider value={{__, setLang}}>
        <Header />
        <div id="main-wrapper">
          <Outlet />
        </div>
        <Footer />
      </LangContext.Provider>
    </div>
  );
}