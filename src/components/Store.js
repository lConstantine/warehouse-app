import React from "react"

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

  if (store.length < 1) {
    return <h2>You drained it all...</h2>
  }

  return (
    <div>
      <div>
        <input
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
              {item.name}
              <br />${item.price.toFixed(2)}
              <br />
              Q:{item.amount}
            </button>
          )
      )}
    </div>
  )
}

export default Store
