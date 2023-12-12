const styleHeader = {
  backgroundColor: "blanchedalmond",
};

let loginButton = "Login";

import { FOOD_LOGO } from "./../utils/constant";
export const Header = () => {
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
            loginButton = loginButton === "Login" ? "Logout" : "Login";
          }}
        >
          {loginButton}
        </button>
      </ul>
    </div>
  );
};

export default Header;
