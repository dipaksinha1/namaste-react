import { useState } from "react";
import { FOOD_LOGO } from "./../utils/constant";

export const Header = () => {
  // let loginButton = "Login";//Normal Variable

  const [loginButton, setLoginButton] = useState("Login"); //When it is a variable then why it is a constant not let as we are changing value?
  //whenever state changes whole componenet is re rendered so const is ok

  return (
    <div className="header" style={{ backgroundColor: "blanchedalmond" }}>
      <div className="logo">
        <img src={FOOD_LOGO} alt="food-logo" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <button
          onClick={() => {
            setLoginButton(loginButton === "Login" ? "Logout" : "Login");
            console.log(loginButton);
            //Here if we log normal variable,value is changed but it wont show on UI bc react didnt render this component when value was chnaged. So you need to declare state variable.
          }}
        >
          {loginButton}
        </button>
      </ul>
    </div>
  );
};

export default Header;