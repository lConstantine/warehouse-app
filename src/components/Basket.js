import React from "react"

const Basket = ({ basket, store, setStore, setBasket }) => {
  const handlePassToStore = (basketItem) => {
    const newBasket = basket.map((obj) =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount - 1 } : obj
    )
    setBasket(newBasket)

    const newStore = store.map((obj) =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount + 1 } : obj
    )
    setStore(newStore)
  }

  if (basket.length < 1) {
    return <h2>The basket is empty, you monster...</h2>
  }

  return (
    <div>
      <div>
        <h2>Reciept</h2>
        {basket.map(
          (item, index) =>
            item.amount > 0 && (
              <button onClick={() => handlePassToStore(item)} key={index + 1}>
                {item.name} {item.price.toFixed(2)} x {item.amount} -- $
                {(item.price * item.amount).toFixed(2)}
              </button>
            )
        )}
      </div>

      {/* so here we should print out the receipt but for the purpose of this test it's OK to just whipe the basket clean */}

      <div>
        <button onClick={() => setBasket([])}>
          <h2>Total: </h2>$
          {basket
            .reduce((acc, rec) => acc + rec.amount * rec.price, 0)
            .toFixed(2)}
        </button>
      </div>
    </div>
  )
}

export default Basket
