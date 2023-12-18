import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [searchtext, setSearchtext] = useState("");
  const [reslist, setReslist] = useState([]);
  const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await response.json();
    console.log(json);
    setReslist(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants //optional chaining
    );

    setListOfAllRestaurant(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("Componenet rendered");
  console.log(reslist);
  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>Search</div>
      <input
        type="text"
        placeholder="Enter Restaurant name here to search"
        value={searchtext}
        onChange={(event) => {
          const searchtextValue = event.target.value;
          setSearchtext(event.target.value);
          const filteredRestaurantLists = listOfAllRestaurant.filter((obj) =>
            obj.info.name.toLowerCase().includes(searchtextValue.toLowerCase())
          );
          setReslist(filteredRestaurantLists);
        }}
      />
      <div className="restaurant-list">
        {reslist.map((restaurant) => (
          <RestaurantCard
            restaurantData={restaurant}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
