import React from "react"
import Item from './Item'

const Basket = ({ basket, setStore}) => {
  console.log('Basket', basket)
  return (
    <div style={{ "flexGrow": "1", 'width': '500px' }}>
      <h2>This Is Basket</h2>
      <ul style={{ listStyle: "none" }}>
        <Item goods={basket} select={setStore} />
      </ul>
    </div>
  );
};

export default Basket;
