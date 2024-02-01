import { useEffect, useState } from "react";
import fetchItems from "../utils/fetchItems";
import ItemCard from "./ItemCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ItemsList({ category }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems().then((data) => {
      setItems([...data]);
    });
  }, []);

  return category ? (
    <Row xs={2} md={5} className="g-4">
      {items.map((item, idx) => {
        return item.category_name === category ? (
          <Col key={idx}>
            <ItemCard item={item} />
          </Col>
        ) : null;
      })}
    </Row>
  ) : (
    <Row xs={2} md={5} className="g-4">
      {items.map((item, idx) => (
        <Col key={idx}>
          <ItemCard item={item} />
        </Col>
      ))}
    </Row>
  );
}
