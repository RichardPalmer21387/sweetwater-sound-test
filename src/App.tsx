import React, { useState } from 'react';
import './App.css';

import Items from './data/items.json';
import { Cart } from './components/Cart/Cart';

function App() {
    const [cartData, setCartData] = useState(Items);

    const removeItem = (indexToRemove:number) => {
        const cloneCartData = [...cartData];
        cloneCartData.splice(indexToRemove, 1);
        setCartData(cloneCartData);
    }

    return (
        <div className="App">
            <Cart data={cartData} removeItemFromCart={removeItem} />
        </div>
    );
}

export default App;
