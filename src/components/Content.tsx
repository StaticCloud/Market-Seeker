import { JSX, useEffect, useState } from "react";
import dictionary from "../utils/Dictionary";
import MarketType from "../types/MarketType";

function Content({ keyword }: { keyword: string }): JSX.Element {
    const [market, setMarket] = useState<MarketType>();

    useEffect(() => {
        setMarket(dictionary.get(keyword))
    }, [keyword])

    return (
        <div className="content">
            {(market?.title && market?.description) ? (
                <div className="marketWrapper">
                    <h1 className="title"><span className="marketNumber">{market.marketNumber}. </span>{market?.title}</h1>
                    <p className="description">{market?.description}</p>
                </div>
            ) : (
                <div>
                    <h1 className="appTitle">Market Seeker</h1>
                    <p className="description">A Capital Market query tool for businesses looking to inform themselves about various markets using keywords that align with their needs, current situation, or concerns. <i>Select a keyword from the dropdown to get started.</i></p>
                </div>
            )}
        </div>
        
    );
}

export default Content;