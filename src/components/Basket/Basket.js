import React from "react";
import { CgCreditCard } from "react-icons/cg";

export const Basket = ({ basket, store, setStore, setBasket }) => {
  const handlePassToStore = (basketItem) => {
    const newBasket = basket.map((obj) =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount - 1 } : obj
    );
    setBasket(newBasket);

    const newStore = store.map((obj) =>
      obj.name === basketItem.name ? { ...obj, amount: obj.amount + 1 } : obj
    );
    setStore(newStore);
  };

  return (
    <div className="basket">
      <div className="receipt">Receipt</div>

      {basket.length < 1 ? (
        <div className="empty">Printed Out!!!</div>
      ) : (
        basket.map(
          (item, index) =>
            item.amount > 0 && (
              <button onClick={() => handlePassToStore(item)} key={index + 1}>
                <span className="info">
                  <span>{item.name[0].toUpperCase() + item.name.slice(1)}</span>
                  <span>
                    {item.amount} x {item.price.toFixed(2)}
                  </span>
                </span>
                <span className="price">
                  {(item.price * item.amount).toFixed(2)}
                </span>
              </button>
            )
        )
      )}

      {/* so here we should print out the receipt but for the purpose of this test it's OK to just whipe the basket clean */}

      <button className="total" onClick={() => setBasket([])}>
        <CgCreditCard color="yellow" style={{ marginRight: "7px" }} />
        Total:
        {basket
          .reduce((acc, rec) => acc + rec.amount * rec.price, 0)
          .toFixed(2)}
      </button>
    </div>
  );
};
