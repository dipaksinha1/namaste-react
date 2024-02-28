import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, SWIGGY_MENU_API_URL } from "./../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resMenu, useResMenu] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  const getData = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + id);
    const json = await data.json();
    useResMenu(json?.data?.cards[0]?.card?.card?.text);
    console.log(json);

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });

    setMenuItems(uniqueMenuItems);
    console.log(uniqueMenuItems);
  };

  useEffect(() => {
    console.log(id);
    getData();
  }, []);

  return Object.keys(resMenu).length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resMenu}</h1>
      <ul>
        {menuItems.map((item) => (
          <>
            <li id={item?.id}>
              {item?.name} - RS{item?.price || item?.defaultPrice}
            </li>
            <li id={item?.id}>{item?.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
