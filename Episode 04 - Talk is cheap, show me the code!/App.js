import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>hello one line</h1>;

// const heading = React.createElement("div", { className: "h1" }, "Hi heading");

// console.log(jsxHeading);
// console.log(heading);
const restData = [
  {
    id: "kdjcbx821",
    img: "https://b.zmtcdn.com/data/pictures/chains/0/17881760/d500edec7041e0150a1212c8dcc24cfa_o2_featured_v2.jpg",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "49min",
  },
  {
    id: "jldbnzcxz2",
    img: "https://b.zmtcdn.com/data/pictures/7/18536527/ef2db7a2c60faa791bfafb410f612cb4_o2_featured_v2.jpg",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "32min",
  },
  {
    id: "kwks892",
    img: "https://b.zmtcdn.com/data/pictures/8/20226828/86cf9aa9f12a320dfc8437585eefa2ab_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
  {
    id: "qkjbs82",
    img: "https://b.zmtcdn.com/data/pictures/8/20226828/86cf9aa9f12a320dfc8437585eefa2ab_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "92min",
  },
  {
    id: "nwjsz12w1",
    img: "https://b.zmtcdn.com/data/pictures/0/17758750/37acd5beb4977b9a46ecc5d4b6f4e1b4_o2_featured_v2.jpg",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
  {
    id: "mcnsw2q",
    img: "https://b.zmtcdn.com/data/pictures/8/20226828/86cf9aa9f12a320dfc8437585eefa2ab_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "22min ",
  },
  {
    id: "xmaka19",
    img: "https://b.zmtcdn.com/data/pictures/8/20226828/86cf9aa9f12a320dfc8437585eefa2ab_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
  {
    id: "kmksaijs9",
    img: "https://b.zmtcdn.com/data/pictures/chains/2/18796372/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
  {
    id: " jdbnsai82",
    img: "https://b.zmtcdn.com/data/pictures/4/20586304/249d982fd2520500ce56ff41a24397bd_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
  {
    id: "hbxn01",
    img: "https://b.zmtcdn.com/data/pictures/4/20586304/249d982fd2520500ce56ff41a24397bd_o2_featured_v2.jpg?output-format=webp",
    title: "Chaayos",
    rating: "4.3 Star",
    desc: "Tea North, Sabun Daana, Crunchy foods, chicken and more ",
    time: "38min",
  },
];
const styleHeader = {
  backgroundColor: "blanchedalmond",
};
const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "blanchedalmond" }}>
      <div className="logo">
        <img
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="food-logo"
        />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
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

const Body = () => {
  return (
    <div className="body">
      <div>Search</div>
      <div className="restaurant-list">
        {restData.map((restaurant) => (
          <RestaurantCard restaurantData={restaurant} key={restaurant.id}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
