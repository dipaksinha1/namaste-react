import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearAllCart = () => {
    console.log("cart cleared")
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={clearAllCart}
        >
          clear cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
