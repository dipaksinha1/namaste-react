import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  console.log("resId");

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div data-testid="resCard" className="mx-[400]">
      <h1 className="font-bold mt-10 text-center text-3xl">{name}</h1>
      <p className="text-gray-500 text-center text-2xl">
        {cuisines ? cuisines.join(", ") : "No cuisines available"}
      </p>
      <p className="text-gray-500 text-center  text-2xl">{areaName}</p>
      {/* categories accordian */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index == showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
