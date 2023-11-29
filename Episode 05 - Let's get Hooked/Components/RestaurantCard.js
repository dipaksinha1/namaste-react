const RestaurantCard = (props) => {
  const { img, title, rating, time } = props.restaurantData;
  return (
    <div className="restaurant-card">
      <img src={img} />
      <h1>{title}</h1>
      <h2>{rating}</h2>
      <p>Delivery in {time}</p>
    </div>
  );
};

export default RestaurantCard;
