import { JSX, useEffect, useState } from "react";
import ContentTypes from "../types/ContentTypes";
import dictionary from "../utils/Dictionary";
import MarketType from "../types/MarketType";

function Content({ keyword }: ContentTypes): JSX.Element {
    const [market, setMarket] = useState<MarketType>();

    useEffect(() => {
        setMarket(dictionary.get(keyword))
        console.log(market)
    }, [keyword])

    return (
        <>
            <h1>{market?.title}</h1>
            <p>{market?.description}</p>
        </>
    );
}

export default Content;