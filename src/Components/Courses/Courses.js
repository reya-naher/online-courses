import React from 'react';
import './Courses.css'

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
            <img  className="card-img" src={course.img} alt=""/>
            <div className="card-text">
              <p className="instructor">{course.instructor}</p>
              <p className="price">{course.price}</p>
              <p className="level">{course.level}</p>
              <p className="badge">{course.badge}</p>
      </div>
    </div>
    <div className="card-footer">
      <button type="button" onClick={() =>handleCart(props.course)}>Enrol Now</button>
    </div>
  </div>


      </div>
      
  
  

    </div>
  );
};

export default Courses;