import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pKqpLBS/c1.jpg"
            alt="../../../images/c1.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">
              Explore YourSelf
              </h1>
            <p className="carousel-text">
              Get ahead with expert-led training in coding, data, design, digital marketing, and more.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Z8dPCRR/c4.jpg"
            alt="../../../images/c4.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">
              Explore YourSelf
              </h1>
            <p className="carousel-text">
              Get ahead with expert-led training in coding, data, design, digital marketing, and more.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/J3X4cGG/c2.jpg"
            alt="../../../images/c2.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">
              Explore YourSelf
              </h1>
            <p className="carousel-text">
              Get ahead with expert-led training in coding, data, design, digital marketing, and more.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;