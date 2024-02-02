import { useEffect, useState } from "react";
import fetchItems from "../utils/fetchItems";
import ItemCard from "./ItemCard";

export default function ItemsList({ category, setSinglePurchase }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems().then((data) => {
      setItems([...data]);
    });
  }, []);

  return category ? (
    <section className="item-list-container">
      {items.map((item) => {
        return item.category_name === category ? (
          <ItemCard
            key={item.item_id}
            item={item}
            setSinglePurchase={setSinglePurchase}
          />
        ) : null;
      })}
    </section>
  ) : (
    <section className="item-list-container">
      {items.map((item) => {
        return (
          <ItemCard
            key={item.item_id}
            item={item}
            setSinglePurchase={setSinglePurchase}
          />
        );
      })}
    </section>
  );
}
