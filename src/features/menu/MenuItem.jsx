import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ""}`}/>
      <div className="flex grow flex-col pt-0.5">
        <p className="text-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-50
          0">Sold out</p>}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
