import { useContext } from "react"
import { LangContext } from "../../App"
import "./style.css"

export default function Timeline({boxesUp, boxesDown}){
    const year_now = new Date().getFullYear();

    // find min year, while building all years
    let min_year = year_now;
    for(let ev of boxesUp.concat(boxesDown)){
        let ev_year = ev.span[0].split(".")[1];
        if(ev_year < min_year){
            min_year = ev_year;
        }
    }
    let years = [];
    // years axis
    for(let i = year_now + 1; i >= min_year; i--){
        years.push(i);
    }
    function calcHalfYear(date){
        const [month, year] = date ? date.split(".") : [1, year_now + 1];
        return Number(year) + Number(month >= 7 ? 0.5 : 0);
    }
    function calcSpan(span){
        return (calcHalfYear(span[1] ?? `01.${year_now+1}`) - calcHalfYear(span[0])) * 2;
    }
    // event bars
    let beans = [];
    for(let row = 0; row < 3; row++){
        for(let year = year_now + 1; year > min_year; year = year - 0.5){
            let error = 0;
            for(let ev of boxesUp.concat(boxesDown)){
                let span = calcSpan(ev.span);

                if(calcHalfYear(ev.span[1]) === year && ((boxesUp.includes(ev)) ? 0 : 2) === row){
                    beans.push(<span className="ev" style={{ gridRow: `auto / span ${span}` }}></span>);
                    year = year - (span - 1) * 0.5;
                }else{
                    error++;
                }

                if(error === boxesUp.concat(boxesDown).length){
                    beans.push(<span></span>); //TODO PO CO TO
                }
            }
        }
    }

    return(
        <div className="timeline">
            <div className="boxes flex-down stretch">
            {boxesUp.map((val) => 
                <TmlnBox key={val.name} data={val} />)}
            </div>
            <div className="line">
                <div id="tmln-line-itself" />
                <div id="tmln-line-bars" style={{ gridTemplateRows: `repeat(${(year_now - min_year + 1) * 2}, 1fr)` }}>
                    {beans}
                </div>
                <div id="tmln-line-years">
                {years.map((year) => <span key={year}>{year}</span>)}
                </div>
            </div>
            <div className="boxes flex-down stretch">
            {boxesDown.map((val) => 
                <TmlnBox key={val.name} data={val} />)}
            </div>
        </div>
    )
}

function TmlnBox({data}){
    const {__} = useContext(LangContext);

    const summaryIsAList = Array.isArray(__(data.summary));

    return(
        <div className="flex-down tight">
            <p className="ghost">
                {data.span[0]} – {data.span[1] ?? <span className="currently">{__("currently")}</span>}
            </p>
            <h2>{__(data.name)}</h2>
            <a href={data.placeLink}>
                <h3>{__(data.place)}</h3>
            </a>
            {data.summaryMode === "i_can" && <p>{__("i_can")}</p>}
            <ul>
                {summaryIsAList && __(data.summary).map((text, ind) => <li key={ind}>{text}</li>)}
            </ul>
        </div>
    )
}