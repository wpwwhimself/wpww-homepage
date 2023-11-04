import { useContext } from "react"
import { LangContext } from "../../pages/Layout";
import "./style.css"
import { TextBox } from "../TextBox";
import { DateSpan } from "../DateSpan";
import { ArrowClickTile } from "../ClickTiles";
import FAIcon from "../FAIcon";

export default function Timeline({boxesUp, boxesDown, labelUp, labelDown}){
    const year_now = new Date().getFullYear();
    const boxesAll = boxesUp.concat(boxesDown);

    const columns_per_side = Math.max(boxesAll.map(ev => ev.shiftColumn).filter(Boolean)) + 1;
    // splitting boxes
    function timelineColumnNo(event){
        let boxesDivision = {};
        // boxesUp
        for(let i = 1; i <= columns_per_side; i++){
            boxesDivision[-i] = boxesUp.filter(box => (box.shiftColumn ?? 0) === i - 1);
        }
        // boxesDown
        for(let i = 1; i <= columns_per_side; i++){
            boxesDivision[i] = boxesDown.filter(box => (box.shiftColumn ?? 0) === i - 1);
        }

        for(let col_no in boxesDivision){
            if(boxesDivision[col_no].includes(event)){
                return +col_no + columns_per_side;
            };
        }
    }

    // find min year, while building all years
    let min_year = year_now;
    for(let ev of boxesAll){
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
    for(let row = 0; row < columns_per_side * 2 + 1; row++){
        for(let year = year_now + 1; year > min_year; year = year - 0.5){
            let error = 0;
            for(let ev of boxesAll){
                let span = calcSpan(ev.span);
                
                if(calcHalfYear(ev.span[1]) === year && timelineColumnNo(ev) === row){
                    beans.push(
                        <span
                            className="ev"
                            data-id={ev.code}
                            style={{ gridRow: `auto / span ${span}` }}
                            />
                    );
                    year = year - (span - 1) * 0.5;
                }else{
                    error++;
                }
                // uzupełnienie dziur
                if(error === boxesAll.length){
                    beans.push(<span></span>);
                }
            }
        }
    }
    
    // beans column sizes
    let bar_column_sizes = Array(columns_per_side * 2 + 1).fill("2fr");
    bar_column_sizes[columns_per_side] = "1fr";

    return(
        <div className="timeline but-mobile-down">
            <div className="boxes flex-down">
                <h3 className="grayed-out">{labelUp}</h3>
            {boxesUp.map((val) => 
                <TmlnBox key={val.code} data={val} />)}
            </div>
            <div className="line">
                <div id="tmln-line-itself" />
                <div id="tmln-line-bars" style={{
                    gridTemplateRows: `repeat(${(year_now - min_year + 1) * 2}, 1fr)`,
                    gridTemplateColumns: bar_column_sizes.join(" "),
                }}>
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
        <TextBox pinLeft={true} dataId={data.code}>
            <p className="ghost">
                <DateSpan dates={data.span} noInterval={true} />
            </p>
            {data.icon && <div className="top-right">
                <FAIcon icon={data.icon} />
            </div>}
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
