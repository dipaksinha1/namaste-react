import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Lottie from "lottie-react";
import notFoundRestaurant from "./../images/notFoundRestaurant.json";
import UserContext from "./../utils/UserContext"
import { useContext } from "react";

const Body = () => {
  const [searchtext, setSearchtext] = useState("");
  const [reslist, setReslist] = useState([]);
  const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    // Function to check Swiggy Restaurant data resDataCheck()
    function resDataCheck(jsonData) {
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
      return [];
    }

    const resData = resDataCheck(json);
    console.log(resData);

    setReslist(resData);
    setListOfAllRestaurant(resData);
  };

  console.log("Componenet rendered");
  console.log(reslist);
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="search-restaurant">
      <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="search-text">Search</div>
        <div className="search-container">
          <input
            type="text"
            placeholder=" Search Restaurant Name"
            value={searchtext}
            className="search-text-input"
            onChange={(event) => {
              const searchtextValue = event.target.value;
              setSearchtext(event.target.value);
              const filteredRestaurantLists = listOfAllRestaurant.filter(
                (obj) =>
                  obj.info.name
                    .toLowerCase()
                    .includes(searchtextValue.toLowerCase())
              );
              setReslist(filteredRestaurantLists);
            }}
          />
        </div>
      </div>
      {reslist.length === 0 ? (
        // <Shimmer />
        <div className="not-found-container">
          <div className="not-found-animation">
            <Lottie animationData={notFoundRestaurant} loop={true} />
          </div>
        </div>
      ) : (
        <div className="restaurant-list">
          {reslist.map((restaurant) =>
            restaurant.info.isOpen ? (
              <RestaurantCardPromoted
                restaurantData={restaurant}
                key={restaurant.info.id}
              />
            ) : (
              <RestaurantCard
                restaurantData={restaurant}
                key={restaurant.info.id}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
