import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";
// import useOrder from "../hooks/useOrder";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <p className="flex-1">{item.name}</p>
            <p className="flex-1 text-lg text-center">
              {formatCurrency(item.price)}
            </p>
            <p className="flex-1 font-black text-center">
              Cantidad: {item.quantity} -{" "}
              {formatCurrency(item.price * item.quantity)}
            </p>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
