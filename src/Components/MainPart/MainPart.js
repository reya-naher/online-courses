import React from 'react';
import fake from '../../FakeData/fake';
import Courses from '../Courses/Courses';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const MainPart = () => {
  const data = fake;
  /*cart state */
  const [cartData, setCartData] = useState([])

/*enroll/handleCart function*/
const handleCart = (data) => {
  const newCart = [...cartData, data]
  setCartData(newCart)
}

/*delete function*/
  const deleteItem = (key) => {
    const newList = cartData.filter((item) => item.id !== key)
    setCartData(newList);
  }
  return (
    <Container>
    <div className="course-item">
    <h1 className="courses-headline">Find What Fascinates You
    </h1>
    {
    data.map(course => <Courses
      course={course}
      key={course.id}
      handleCart={handleCart}
      cartData={cartData}
      deleteItem={deleteItem}
    ></Courses>)
        }
      </div>
      </Container>
  );
};

export default MainPart;