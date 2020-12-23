import React, { useState } from "react"
import { Store } from "../Store/Store"
import { Basket } from "../Basket/Basket"


export const Main = () => {

  /* here we're gonna get the JSON item list form the server, according to initial test conditions,
     but I'm using a short example for your convenience */

  const [store, setStore] = useState([
    {
      name: "sugar",
      price: 50.0,
      amount: 55,
    },
    {
      name: "matches",
      price: 25.15,
      amount: 40,
    },
    {
      name: "bread",
      price: 25.15,
      amount: 67,
    },
    {
      name: "soap",
      price: 25.15,
      amount: 10,
    },
    {
      name: "milk",
      price: 37.62,
      amount: 18,
    }
  ]);
  const [basket, setBasket] = useState([
    {
      name: "sugar",
      price: 50.0,
      amount: 5,
    },
    {
      name: "bread",
      price: 25.15,
      amount: 5,
    },
  ]);
  const [search, setSearch] = useState("")

  return (
    <div className="App">
        <Store
          store={store}
          setStore={setStore}
          basket={basket}
          setBasket={setBasket}
          search={search}
          setSearch={setSearch}
        />
        <Basket
          store={store}
          setStore={setStore}
          basket={basket}
          setBasket={setBasket}
        />
    </div>
  )
}
