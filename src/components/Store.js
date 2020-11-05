import React from "react"


const Store = ({ store, basket, setStore, setBasket, search, setSearch }) => {

  const handlePassToBasket = (storeItem) => {
    const thisItem = basket.find(basketItem => basketItem.name === storeItem.name)
      if (thisItem === undefined) {
        setBasket([...basket, {...storeItem, amount: 1}])
      }else{
        const newBasket = basket.map(obj =>
          obj.name === storeItem.name ? { ...obj, amount: obj.amount + 1 } : obj)
        setBasket(newBasket)
      }
    const newStore = store.map(obj =>
      obj.name === storeItem.name ? { ...obj, amount: obj.amount - 1 } : obj)
    setStore(newStore)
  }              /* this very well might be the worst handler you can find, but it works! (just like me lol)
                    and i need go get some rest, so... Enjoy! =) */

  return (
    <div style={{ border: "1px solid red", "flexGrow": "1", 'width': '500px' }}>
      <h2>This Is Store</h2>

        <div style={{ 'border': '1px solid blue', 'marginBottom':'0px' }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search goods"/>
        </div>

      {store
        .map(
          (item, index) => (
            item.amount > 0 &&

            /* is this the best search solution? probably not, I'm not gonna argue with that.
              but it's almost 2am here and I have to go to my full time job tomorrow so "excusez moi",
              I'll make it look pretty later... */

              ((search === '' || item.name.indexOf( search ) !== -1) &&
                <button onClick={() => handlePassToBasket(item)}
                  key={index+1}
                  style={{ border: "1px solid green", "margin": "5px", "width": "100%"}}>
                    {item.name}<br/>${item.price}<br/>Q:{item.amount}
                </button>)
          )
        )
      }
    </div>
  );
};

export default Store;
