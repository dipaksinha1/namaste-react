import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,setShowIndex,key, showItems }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex(key);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-3xl">⬇️</span>
      </div>

      {/* Item List */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
