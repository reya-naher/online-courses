import React from 'react';

const Cart = (props) => {
  const cart = props.cart
  //console.log(cart)
  let totalprice = cart.reduce((sum, item)=> sum + item.price,0)
  return (

    <div>

      <h1>Total Courses: {cart.length}</h1>
      <h1>Total price: {totalprice}</h1>
      {
        cart.map(data => <p>{data.name}</p>)
      }
    </div>
  );
};

export default Cart;