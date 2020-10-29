import './App.css'
import React, { useState } from 'react'
import Search from './components/Search'
import Store from './components/Store'
import Basket from './components/Basket'
import CheckOut from './components/CheckOut'

function App() {

  const [store, setStore] = useState([
    {
      name: 'sugar',
      price: 50.00,
      amount: 20
    },
    {
      name: 'bread',
      price: 25.15,
      amount: 45
    },
    {
      name: 'milk',
      price: 37.62,
      amount: 12
    }
  ])
  const [basket, setBasket] = useState([])
  const [search, setSearch] = useState('')


  return(
    <div className="App">
      <h1 style={{ 'textAlign': 'center' }} >Warehouse App</h1>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-around', 'height': '60vh' }}>
        <div style={{ 'border': '1px solid white', 'display': 'flex', 'flexDirection': 'column' }}>
          <Search search={search} setSearch={setSearch} />
          <Store store={store} setCart={setBasket} />
        </div>
        <div style={{ 'border': '1px solid yellow', 'display': 'flex', 'flexDirection': 'column'}}>
          <Basket basket={basket} setStore={setStore} />
          <CheckOut setBasket={setBasket} />
        </div>
      </div>
    </div>
  )
}

export default App;
