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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    // Function to check Swiggy Restaurant data resDataCheck()
    async function resDataCheck(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        console.log(i); //Index where we actually got the data
        // Optional chaining
        let jsonData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // If jsonData is defined, return it.
        if (jsonData !== undefined) {
          return jsonData;
        }
      }
    }

    const resData = await resDataCheck(json);
    console.log(json);

    setReslist(resData);
    setListOfAllRestaurant(resData);
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
