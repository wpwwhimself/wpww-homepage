import { useContext } from "react"
import { LangContext } from "../App"

export function DateSpan({dates}){
    const {__} = useContext(LangContext)

    //TODO ILE LAT?

    return <span>
        {dates[0]} – {dates[1] ?? <span className="currently">{__("currently")}</span>}
    </span>
}