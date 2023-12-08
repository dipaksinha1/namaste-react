import RestaurantCard from "./RestaurantCard";
import { restData } from "./../utils/resMockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [searchtext, setSearchtext] = useState("");
  const [reslist, setReslist] = useState(restData);

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []); //Empty dpenedency array means , will run once the componenet is mounted initially

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );

    const json=await response.json();
    console.log(json)
    console.log(json.data.success.cards[4].gridElements.restaurants)
  };

  console.log("Componenet rendered");
  return (
    <div className="body">
      <div>Search</div>
      <input
        type="text"
        placeholder="Enter Restaurant name here to search"
        value={searchtext}
        onChange={(event) => {
          const searchtextValue = event.target.value;
          setSearchtext(event.target.value);
          const filteredData = restData.filter((obj) =>
            obj.title.startsWith(searchtextValue)
          );
          setReslist(filteredData);
        }}
      />
      <div className="restaurant-list">
        {reslist.map((restaurant) => (
          <RestaurantCard restaurantData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
