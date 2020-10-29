import React from 'react'

const CheckOut = ({ setBasket }) => {

  return(
    <div style={{ 'marginBottom': '0%' }}>
    <button onClick={() => setBasket([])} ><h2>CheckOut</h2></button>
  </div>
  )
}

export default CheckOut