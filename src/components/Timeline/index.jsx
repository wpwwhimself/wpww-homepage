import { useContext } from "react"
import { LangContext } from "../../pages/Layout";
import "./style.css"
import { TextBox } from "../TextBox";
import { DateSpan } from "../DateSpan";
import { ArrowClickTile } from "../ClickTiles";

export default function Timeline({boxesUp, boxesDown, labelUp, labelDown}){
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
                    beans.push(
                        <span
                            className="ev"
                            style={{ gridRow: `auto / span ${span}` }}
                            />
                    );
                    year = year - (span - 1) * 0.5;
                }else{
                    error++;
                }
                // uzupełnienie dziur
                if(error === boxesUp.concat(boxesDown).length){
                    beans.push(<span></span>);
                }
            }
        }
    }

    return(
        <div className="timeline but-mobile-down">
            <div className="boxes flex-down stretch">
                <h3 className="grayed-out">{labelUp}</h3>
            {boxesUp.map((val) => 
                <TmlnBox key={val.code} data={val} />)}
            </div>
            <div className="line">
                <div id="tmln-line-itself" />
                <div id="tmln-line-bars" style={{ gridTemplateRows: `repeat(${(year_now - min_year + 1) * 2}, 1fr)` }}>
                    {beans}
                </div>
                <div id="tmln-line-years">
                {years.map((year, ind) => <span key={ind}>{year}</span>)}
                </div>
            </div>
            <div className="boxes flex-down">
                <h3 className="grayed-out">{labelDown}</h3>
            {boxesDown.map((val) => 
                <TmlnBox key={val.code} data={val} />)}
            </div>
        </div>
    )
}

function TmlnBox({data}){
    const {__} = useContext(LangContext);

    const summaryIsAList = Array.isArray(__(`${data.code}.summary`));

    return(
        <TextBox pinLeft={true}>
            <p className="ghost">
                <DateSpan dates={data.span} noInterval={true} />
            </p>
            <h2>{__(`${data.code}.name`)}</h2>
            {data.hasSpec && <p className="accent">{__(`${data.code}.spec`)}</p>}
            <a href={data.placeLink}>
                <h3>{__(`${data.code}.place`)}</h3>
            </a>
            <p>{__("i_can")}</p>
            <ul>
                {summaryIsAList && __(`${data.code}.summary`).map((text, ind) => <li key={ind}>{text}</li>)}
            </ul>
            {data.clients && <p>{__("clients")} {__(`${data.code}.clients`)}</p>}
            {data.stack && <p>{__("stack")} <b>{data.stack}</b></p>}
            {data.readSomeMore && <ArrowClickTile label="more" fwd={true} clickfun={`/programmer/${data.readSomeMore}`} />}
        </TextBox>
    )
}
