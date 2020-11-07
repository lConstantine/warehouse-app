import React, { useState } from "react"
import Store from "./components/Store"
import Basket from "./components/Basket"

function App() {
  /* here we're gonna get the JSON item list form the server, according to initial test conditions,
     but I'm using an short example for your convenience */

  const [store, setStore] = useState([
    {
      name: "sugar",
      price: 50.0,
      amount: 20,
    },
    {
      name: "bread",
      price: 25.15,
      amount: 40,
    },
    {
      name: "milk",
      price: 37.62,
      amount: 3,
    },
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
      <div>
        <Store
          store={store}
          setStore={setStore}
          basket={basket}
          setBasket={setBasket}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div>
        <Basket
          store={store}
          setStore={setStore}
          basket={basket}
          setBasket={setBasket}
        />
      </div>
    </div>
  )
}

export default App
