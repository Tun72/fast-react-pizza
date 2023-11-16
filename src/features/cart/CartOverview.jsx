import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuentity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuentity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartPrice) return
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
