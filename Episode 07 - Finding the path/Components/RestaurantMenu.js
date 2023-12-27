import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resMenu, useResMenu] = useState({});

  const getData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
    );
    const json = await data.json();
    console.log("------------");
    useResMenu(json);
    console.log(json);
  };

  useEffect(() => {
    console.log(id);
    getData();
  }, []);

  return Object.keys(resMenu).length === 0 ? null : (
    <div>
      <h1>{resMenu?.data?.cards[0]?.card?.card?.text}</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
