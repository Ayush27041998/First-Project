import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Details = () => {
    const [resdata, Setresdata] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4520243&lng=77.0568062&restaurantId=626128&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER1")
        const reqJSON = await data.json()
        //console.log(reqJSON)
        Setresdata(reqJSON.data)
    };
    if( resdata === null) return <Shimmer/>
    const { name, id, totalRatingsString, costForTwoMessage, cuisines } =  resdata?.cards[2]?.card?.card?.info;
     const itemCard ="Ayushi"
    //const {itemCard} = resdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCard)
    console.log( resdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards )
    return (
        <div className="menu">
            <h1>{name}</h1>
            <div className="detail-container">
                <div>4.0 {totalRatingsString} . {costForTwoMessage}</div>
                <div>{cuisines}</div>
            </div>
        </div>
    )
}

export default Details;