import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ItemCard({ item }) {
  return (
    <Card style={{ width: "20em", height: "34em" }}>
      <Card.Img variant="top" src={item.img_url} />
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>£{item.price}</Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
  );
}
