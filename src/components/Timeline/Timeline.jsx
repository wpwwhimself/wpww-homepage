import { useContext } from "react"
import { LangContext } from "../../App"
import "./style.css"

export default function Timeline({boxesUp, boxesDown}){
    return(
        <div className="timeline flex-down">
            <div className="boxes flex-right stretch">
            {boxesUp.map((val, ind) => 
                <TmlnBox key={ind} data={val} />)}
            </div>
            <div className="line">

            </div>
        </div>
    )
}

function TmlnBox({data}){
    const {__} = useContext(LangContext);

    return(
        <div>
            <p className="ghost">
                {data.span[0]} – 
                {data.span[1] ?? <span className="currently">{__("currently")}</span>}
            </p>
        </div>
    )
}