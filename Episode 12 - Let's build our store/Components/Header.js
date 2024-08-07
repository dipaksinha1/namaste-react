import { useContext, useState } from "react";
import { FOOD_LOGO } from "./../utils/constant";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  // let loginButton = "Login";//Normal Variable

  const [loginButton, setLoginButton] = useState("Login"); //When it is a variable then why it is a constant not let as we are changing value?
  //whenever state changes whole componenet is re rendered so const is ok

  //you can use more than 1 useEffect
  useEffect(() => {
    console.log("useEffect Header called 1");
  });

  useEffect(() => {
    console.log("useEffect Header called 2");
  });

  const { loggedInUser } = useContext(UserContext); //use context
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items.length);
  console.log( useSelector((store) => store.cart.items));

  return (
    <div className="header">
      <div className="logo">
        <img src={FOOD_LOGO} alt="food-logo" />
      </div>
      <ul className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">Cart -{cartItems}</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Header;
