import { CDN_URL } from "./../utils/constant";
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    props?.restaurantData?.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h4>{avgRating} Star</h4>
      <p>Delivery in {sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
