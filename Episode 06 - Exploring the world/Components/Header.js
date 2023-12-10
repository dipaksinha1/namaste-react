const styleHeader = {
  backgroundColor: "blanchedalmond",
};
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
      </ul>
    </div>
  );
};

export default Header;
