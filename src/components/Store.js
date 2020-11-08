import React from "react"
import { BiPackage } from 'react-icons/bi';

const Store = ({ store, basket, setStore, setBasket, search, setSearch }) => {
  const handlePassToBasket = (storeItem) => {
    const thisItem = basket.find(
      (basketItem) => basketItem.name === storeItem.name
    )
    if (thisItem === undefined) {
      setBasket([...basket, { ...storeItem, amount: 1 }]);
    } else {
      const newBasket = basket.map((obj) =>
        obj.name === storeItem.name ? { ...obj, amount: obj.amount + 1 } : obj
      )
      setBasket(newBasket)
    }
    const newStore = store.map((obj) =>
      obj.name === storeItem.name ? { ...obj, amount: obj.amount - 1 } : obj
    )
    setStore(newStore)
  }


  return (
    <div className="store">

      <div className="inputWrapper">
        <input className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search goods"
        />
      </div>

      {store.map(
        (item, index) =>
          item.amount > 0 &&
          (search === "" || item.name.indexOf(search) !== -1) && (
            <button onClick={() => handlePassToBasket(item)} key={index + 1}>
              <div className="info">
                <div>{item.name[0].toUpperCase() + item.name.slice(1)}</div>
                <div className="icon">
                  <BiPackage color="orange"/>
                  {item.amount}
                </div>
              </div>
              <div className="price">{item.price.toFixed(2)}</div>
            </button>
          ))
      }
    </div>
  )
}

export default Store