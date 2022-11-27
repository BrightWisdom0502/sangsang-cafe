import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";

function CardItem({ key, item, category, setCurrentMenu }) {
  const { addItem } = useCart();

  const currentRoute = useLocation();

  return (
    <div>
      <Card style={{ width: '13rem', height: 'auto' }} className="p-0 card overflow-hidden h-100 shadow mx-4">
        <Card.Img src={process.env.PUBLIC_URL + "./images/" + item.img} className="card-img-top img-fluid" />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>{item.price} ₩</Card.Title>
          {/* <Card.Text>{props.desc}</Card.Text> */}
          {
            (currentRoute.pathname === "/menu-choice") ? (
              <button
                className="btn btn-success"
                onClick={() => addItem(item)}
              >
                add
              </button>
             ) : (
              <button
                className="btn btn-success"
                onClick={() => setCurrentMenu(item)}
              >
                edit
              </button>
             )
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
