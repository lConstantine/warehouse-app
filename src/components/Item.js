import React from "react";

const Item = ({ goods, select }) => {

  const handleClick = (item) => {
    goods[item].amount = goods[item].amount - 1
  }

  return (
  goods.map((item) => {
    <li key={item.name}>
      <button onClick={() => handleClick(item)}>{item.name}</button>
    </li>
  }))
}

export default Item;
