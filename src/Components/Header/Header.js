import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.techpowerup.org/200827/c1.jpg"
            alt="../../../images/c1.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">Explore YourSelf</h1>
            <p className="carousel-text">Get ahead with expert-led training in coding, data, design, digital marketing, and more.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.techpowerup.org/200827/c4.jpg"
            alt="../../../images/c4.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">Explore YourSelf</h1>
            <p className="carousel-text">Get ahead with expert-led training in coding, data, design, digital marketing, and more.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.techpowerup.org/200827/c2.jpg"
            alt="../../../images/c2.jpg"
          />
          <Carousel.Caption>
            <h1 className="carousel-header">Explore YourSelf</h1>
            <p className="carousel-text">Get ahead with expert-led training in coding, data, design, digital marketing, and more.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;