import React from 'react';
import './App.css';
import fake from './FakeData/fake.json';
import Courses from './Components/Courses/Courses';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';

function App() {
  let data = fake;
  // console.log(data)

  const [cart, setCart] = useState([])
  const handleCart = (cartData) => {
    //console.log("clicked", cartData)
    const newCart = [...cart,cartData]
    setCart(newCart)
    

  }

  return (
    
    <div>
      <Header></Header>
      <div className="row col-md-12">
        <div className="course-item col-md-10">
        <h1 className="courses-headline">Find What Fascinates You</h1>
        {
          data.map(course => <Courses course={course} key={course.id} handleCart={handleCart}></Courses>)
        }
      </div>
        <div className="cart-item col-md-2">
          <Cart cart={cart}></Cart>
      </div>
      </div>
         
    </div>
  );
}

export default App;
