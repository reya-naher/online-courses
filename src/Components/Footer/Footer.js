import React from 'react';
import './Footer.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className="">
        <Container>
          <Row className="footer text-white p-5">
          <hr />
            <Col md={6} sm={12} xs={12}>
            <h1>
            <b className="text-dark">Transform Your Life <br /> Through Education </b>
            </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio natus qui accusantium est tempore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio natus qui accusantium est tempore!</p>

              <p><FontAwesomeIcon icon={faPhone} /> +0956 88745 243</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> Example@gmail.com</p>
              <ul className="footer-list">
                <li><FontAwesomeIcon style={{fontSize:"25px"}} icon={faFacebook} /></li>
                <li><FontAwesomeIcon style={{fontSize:"25px"}} icon={faTwitter} /></li>
                <li><FontAwesomeIcon style={{fontSize:"25px"}} icon={faInstagram} /></li>
                <li><FontAwesomeIcon style={{ fontSize: "25px" }} icon={faGooglePlus} /></li>
                <li><FontAwesomeIcon style={{fontSize:"25px"}} icon={faLinkedinIn} /></li>
          </ul>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <form>
              <input
                type="email"
                name="email"
                className="input-footer email m-2 p-2"
                id="email"
                placeholder="Your Email Address" />
              <br />
              <input
                type="text"
                name="email"
                className="input-footer m-2 p-2"
                id="name"
                placeholder="Your Name/Company's name" />
              <br />
              <textarea
                className="m-2 p-2"
                placeholder="Your Message"
                name="message"
                id="msg"
                cols="50"
                rows="5">
              </textarea>
              <br />
              <Button
                type="submit"
                className="m-2"
                variant="dark">
                Send
                </Button>
            </form>
          </Col>
        </Row>
        <div className="text-center p-2">
          <p>CopyRight Confident {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
      </div>
      </>
  );
};

export default Footer;