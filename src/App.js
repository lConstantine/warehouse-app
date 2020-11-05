import './App.css'
import React, { useState } from 'react'
import Store from './components/Store'
import Basket from './components/Basket'


function App() {

  /* here we're gonna get the store array of objects from a DB, according to initial test conditions,
     but I'm using an short example for your convenience */

  const [store, setStore] = useState([
    {
      name: 'sugar',
      price: 50.00,
      amount: 20
    },
    {
      name: 'bread',
      price: 25.15,
      amount: 40
    },
    {
      name: 'milk',
      price: 37.62,
      amount: 3
    }
  ])
  const [basket, setBasket] = useState([
    {
      name: 'sugar',
      price: 50.00,
      amount: 5
    },
    {
      name: 'bread',
      price: 25.15,
      amount: 5
    }
  ])
  const [search, setSearch] = useState('')


  return(
    <div className="App">
      <h1 style={{ 'textAlign': 'center' }} >Warehouse App</h1>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-around', 'height': '60vh' }}>
        <div style={{ 'border': '1px solid white', 'display': 'flex', 'flexDirection': 'column' }}>
          <Store store={store} basket={basket} setStore={setStore} setBasket={setBasket} search={search} setSearch={setSearch} />
        </div>
        <div style={{ 'border': '1px solid yellow', 'display': 'flex', 'flexDirection': 'column'}}>
          <Basket basket={basket} store={store} setStore={setStore} setBasket={setBasket} />
        </div>
      </div>
    </div>
  )
}

export default App;
