import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
  const course = props.course;
  const handleCart = props.handleCart;
  // console.log(course)

  return (
    <div className="container">
      <div className="col-md-4 card-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <img className="card-img" src={course.img} alt={course.alt} />
            <div className="card-text">
              <p className="instructor"><FontAwesomeIcon className="user-icon" icon={faUserAlt} /> {course.instructor}</p>
              <p><span className="rating">{course.rating}</span><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} /><FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStarHalfAlt} />  <span>({course.student})</span></p>
              <p className="price"> ${course.price}</p>
              <p className="duration"> {course.time}</p>
              <p className="level">{course.level}</p>
              <button className="badge">{course.badge}</button>
            </div>
          </div>
          <button className="enrol" type="button" onClick={() => handleCart(props.course)} >Enrol Now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;