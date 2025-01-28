import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id));
  };

  const placeOrder = () => {  
    setOrder([]);
    setTip(0);
  }

  const addOneToItem = (id: MenuItem['id']) => {
    setOrder(order.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const restOneToItem = (id: MenuItem['id']) => {
    setOrder(order.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ));
    // if (order.find(item => item.id === id)?.quantity === 1) {
    //   removeItem(id);
    // }
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
    addOneToItem,
    restOneToItem
  };
}
