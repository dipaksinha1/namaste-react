import { CDN_URL } from "./../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo, id } =
    props?.restaurantData?.info;
  return (
    <Link style={{textDecoration:"none"}} to={`restaurant/${id}`}>
      <div className="restaurant-card">
        <img src={CDN_URL + cloudinaryImageId} />
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h3>{costForTwo}</h3>
        <h4>{avgRating} Star</h4>
        <p>Delivery in {sla.slaString}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
