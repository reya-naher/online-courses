import React from 'react';
import './Cart.css'
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShoppingCart, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Media, Card } from 'react-bootstrap';
import AttachedCart from '../AttachedCart/AttachedCart';

const Cart = (props) => {

  /* destructuring props */
  const { cartData, deleteItem, isOpen, hideModal } = props

  /*total price*/
  // let totalPrice = Math.round(cartData.reduce((sum, item) => sum + item.price, 0));

  return (
    /* modal header */
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>Added To Cart</Modal.Title>
        <span>
          <FontAwesomeIcon
            style={{
              fontSize: "35px",
              color: "gray"
            }}
            icon={faShoppingCart} />
          <span className="cart-length"> {cartData.length}</span>
        </span>
      </Modal.Header>
      <Modal.Body style={{ "overflowY": "auto" }}>
        {
          cartData.map(data =>
            <div key={data.id}>
              <Card className="courses-cart">

                {/* enrolled course */}
                <Media>
                  <FontAwesomeIcon className="check-icon"
                    icon={faCheckCircle} />
                  <img
                    width={100}
                    height={64}
                    className="align-self-start mr-3"
                    src={data.img}
                    alt="course"
                  />
                  <Media.Body>
                    <h5> {data.name}
                      <FontAwesomeIcon
                        className="cross-icon"
                        onClick={() => deleteItem(data.id)}
                        icon={faTimes} />
                    </h5>
                    <p className="cart-card-instructor">
                      {data.instructor}
                      <br />
                      <span style={{
                        fontWeight: "600",
                        padding: "10px"
                      }}>
                        price:${data.price}
                      </span>
                    </p>
                  </Media.Body>
                </Media>
                <h6 style={{
                  fontWeight: "bold",
                  margin: "10px 10px 20px 0px"
                }}>Frequently Bought Together</h6>

                {/* plus icon */}
                <FontAwesomeIcon className="plus-icon"
                  icon={faPlus} />

                {/* attach part  */}
                <AttachedCart
                  data={data.category}
                  price={data.price}>
                </AttachedCart>
              </Card>
            </div>
          )}
        {/* back button */}
        <button
          className="back"
          onClick={hideModal}>
          Back
          </button>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;