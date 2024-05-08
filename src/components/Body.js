import Restrauntcard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listofResturant, SetlistofResturant] = useState([]);
  const[filteredList,SetfilteredList] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4520243&lng=77.0568062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    SetlistofResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    SetfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
  }
  
   
  
  return listofResturant.length === 0 ? <Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="search-btn" onClick={()=>{
            const filteredList =listofResturant.filter((res)=>{
              //ssconsole.log(res.info.name);
          return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
        SetfilteredList(filteredList)
        } 
          }>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = resList.filter((res) => res.info.avgRating > 4)
          SetlistofResturant(filteredList)
        }}>Top Rated Resturants</button>
      </div>
      <div className="res-container">
        {console.log(listofResturant)}
        {filteredList.map((restaurant) => (
          <Restrauntcard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;