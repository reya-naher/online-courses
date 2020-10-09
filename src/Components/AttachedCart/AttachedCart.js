import React, { useEffect, useState } from 'react';
import './AttachedCart.css'
import { Media, Card, Row, Col } from 'react-bootstrap';
import fake from '../../FakeData/fake';

const AttachedCart = ({ data, price }) => {
  const [attach, setAttach] = useState([])
  useEffect(() => {
    const filterCourse = fake.filter(a => a.category === data)
    setAttach(filterCourse)
  }, [data])

  /*combined price*/
  let combinedPrice = Math.round(attach.reduce((sum, item) => sum + item.price, 0));

  /*total price*/
  let totalPrice = price + combinedPrice

  return (
    <>
      {
        attach && attach.map((item,index) =>
          <Media key = {index}>
            <img
              width = {100}
              height = {64}
              className = "align-self-start mr-3"
              src = {item.img}
              alt = "Generic placeholder"
            />
            <Media.Body>
              <h5> {item.name}
                <span style = {{
                  float: "right",
                  fontSize: "15px",
                  marginTop: "10px"
                }}>
                  price : ${item.price}
                </span>
              </h5>
              <p className = "cart-card-instructor">
                {item.instructor}
              </p>
            </Media.Body>
          </Media>
        )}
      {/* combined price */}
      <Row>
        <Col md = {12}>
          <div className = "float-left">
            Combined price:${combinedPrice}
          </div>
          <div className = "float-right">
            <button className = "back">
              Add All To Cart
            </button>
          </div>
        </Col>
      </Row>
      {/* total price */}
      <p className = "total-price"> Total price: ${totalPrice} </p>

      {/* related topics */}
      <div style = {{
        float: "left"
      }}>
        <ul className = "related">
          <h5>
            Related Topics
            </h5>
          {attach && attach.map((a, index) =>
            <>
              <a key={index} href="#a">
                <li>{a.related.topic1}</li>
                <li>{a.related.topic2}</li>
              </a>
            </>)}
        </ul>
      </div>
    </>
  );
};

export default AttachedCart;