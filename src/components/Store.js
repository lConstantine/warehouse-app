import React from "react"
import Item from './Item'

const Store = ({ store, setBasket}) => {
  console.log('Store', store)
  return (
    <div style={{ border: "1px solid red", "flexGrow": "1", 'width': '500px' }}>
      <h2>This Is Store</h2>
      <ul style={{ listStyle: "none" }}>
        <Item goods={store} select={setBasket} />
      </ul>
    </div>
  );
};

export default Store;
