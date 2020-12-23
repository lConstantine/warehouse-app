import React from "react"
import { BiPackage } from 'react-icons/bi'
import { FcSearch } from 'react-icons/fc'

export const Store = ({ store, basket, setStore, setBasket, search, setSearch }) => {
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
        <span className="glass"><FcSearch size="1.5em"/></span>
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
              <span className="info">
                <span>{item.name[0].toUpperCase() + item.name.slice(1)}</span>
                <span className="icon">
                  <BiPackage color="orange"/>
                  {item.amount}
                </span>
              </span>
              <span className="price">{item.price.toFixed(2)}</span>
            </button>
          ))
      }
    </div>
  )
}
