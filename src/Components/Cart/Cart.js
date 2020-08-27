import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import { Card } from 'react-bootstrap'

const Cart = (props) => {
  const cart = props.cart
  //console.log(cart)
  let totalPrice = Math.round(cart.reduce((sum, item) => sum + item.price, 0));

  return (
    <div>
      <h1 className="cart-header ">Cart</h1>
      <p className="cart-number"><FontAwesomeIcon style={{ fontSize: "25px", color: "#EB8A2F" }} icon={faShoppingCart} /><span className="cart-length">{cart.length}</span>
      </p>
      <p className="total-price">Total price: ${totalPrice}</p>
      {
        cart.map(data =>
          <Card className="cart-card">
            <Card.Header>{data.name}</Card.Header>
            <Card.Body>
              <p className="cart-card-price">Price: ${data.price}</p>
            </Card.Body>
          </Card>
        )
      }
    </div>

  );
};

export default Cart;