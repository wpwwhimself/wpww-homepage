import { useContext } from "react"
import { LangContext } from "../pages/Layout";

export function DateSpan({dates, noInterval}){
    const {__} = useContext(LangContext)

    function dateToYears(dateString){
        if(dateString === null){
            const today = new Date();
            dateString = today.toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "2-digit"
            });
        }
        const [, month, year] = dateString.match(/(\d{2}).(\d{4})/);
        return (parseInt(year) + month/12);
    }
    const how_long = Math.round(
        (dateToYears(dates[1]) - dateToYears(dates[0])) * 10
    ) / 10;

    return <span>
        {dates[0]} – {dates[1] ?? <span className="currently">{__("currently")}</span>} {!noInterval && <small>({how_long} {__("years")})</small>}
    </span>
}