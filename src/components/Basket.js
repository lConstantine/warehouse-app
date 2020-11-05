import React from "react"


const Basket = ({ basket, store, setStore, setBasket}) => {

  const handlePassToStore = (basketItem) => {

    const newBasket = basket.map(obj =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount - 1 } : obj)
    setBasket(newBasket)
                                                      // YES, I KNOW ABOUT DRY!!! Sorry =)
    const newStore = store.map(obj =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount + 1 } : obj)
    setStore(newStore)
  }

  if (basket.length < 1) {
    return <h2>The basket is empty, you monster...</h2>
  }

  return (
    <div>
    <div style={{ "flexGrow": "1", 'width': '500px' }}>
      <h2>This Is Basket</h2>
      {basket
        .map((item, index) => (
        ((item.amount > 0) &&
        <button onClick={() => handlePassToStore(item)}
        key={index+1}
        style={{ border: "1px solid green", "margin": "5px", "width" : "100%"}}>
        {item.name}<br/>{item.price}x{item.amount} ---- {item.price * item.amount}
        </button>)))
      }
    </div>

    {/* so here we should print out the receipt but for the purpose of this test it's OK to just whipe the basket clean */}

    <div style={{ 'marginBottom': '0%' }}>
    <button onClick={() => setBasket([])} ><h2>CheckOut</h2></button>
  </div>

  </div>
  );
};

export default Basket;
