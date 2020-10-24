import React, { useState } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faStarHalfAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Courses = (props) => {

  /* data destructuring*/
  const { name, img, alt, rating, price, level, time, badge, student, instructor } = props.course;
  const handleCart = props.handleCart;
  const deleteItem = props.deleteItem;
  const cartData = props.cartData;


  /**Modal show function*/
  const [isOpen, setIsOpen] = useState(false);
  function showModal() {
    setIsOpen(true, handleCart(props.course));
  };

  /* modal hide function*/
  const hideModal = () => {
    setIsOpen(false);
  };

  /* button disabled*/
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  function disableButton() {
    setIsButtonDisabled(true);
  }

  return (
  /* courses show in homepage*/
    <>
      <div className="col-md-3 card-container mb-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {name}
            </h5>
            <img className="card-img"
              src={img}
              alt={alt} />
            <div className="card-text">
              <p className="instructor">
                <FontAwesomeIcon
                  className="user-icon"
                  icon={faUserAlt} />
                {instructor}
              </p>
              <p>
                <span className="rating">
                  {rating}
                </span>
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStar} />
                <FontAwesomeIcon
                  className="star-icon"
                  icon={faStarHalfAlt} />
                <span className="student">
                  ({student})
                  </span>
              </p>
              <p className="price">
                ${price}
              </p>
              <p className="duration">
                {time}
              </p>
              <p className="level">
                {level}
              </p>
              <button
                className="badge">
                {badge}
              </button>
            </div>
          </div>

          {/* enroll button */}
          <button disabled={isButtonDisabled}
            className="enroll"
            type="button"
            onClick={() => {
              showModal();
              disableButton();
            }}>
            <FontAwesomeIcon
              icon={faCartPlus} />
              enroll Now
              </button>
          <Cart
            cartData={cartData}
            deleteItem={deleteItem}
            isOpen={isOpen}
            hideModal={hideModal}
          >
          </Cart>
        </div>
      </div>
      </>
  );
};

export default Courses;