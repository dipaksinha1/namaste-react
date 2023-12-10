import {CDN_URL} from './../utils/constant'
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla } = props.restaurantData.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL+cloudinaryImageId} />
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <p>Delivery in {sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
