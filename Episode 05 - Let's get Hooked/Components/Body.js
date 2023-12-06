import RestaurantCard from "./RestaurantCard";
import { restData } from "./../utils/resMockData";
import { useState } from "react";
const Body = () => {
  //Local state variable - super powerful vairable
  //It is similar to normal variable but state vairable like --  let searchtext=""  --
  const [searchtext, setSearchtext] = useState("");
  const [reslist, setReslist] = useState(restData);
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
          console.log(searchtext); //why does it print previous value EVEN THOUGH WE UPDATED IN LINE 19?

          // In React, the useState hook in functional components is asynchronous, meaning that the state
          // updates may not be immediately reflected in the variable holding the state. When you call setSearchtext(event.target.value),
          // React schedules an update to the state, but it doesn't happen immediately.

          // Therefore, when you log the searchtext immediately after calling setSearchtext(event.target.value), you may see the previous value because the state update hasn't been applied yet.
          const filteredData = restData.filter((obj) =>
            obj.title.startsWith(searchtextValue)
          );
          console.log(filteredData);
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
