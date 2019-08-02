import React, { useState, useEffect } from 'react';
import './App.css';

import Items from './data/items.json';
import { Cart, ICartProps } from './components/Cart/Cart';

const localStorageState = localStorage.getItem('sweetwater-sound-test-data');

function App() {
    const [cartData, setCartData] = useState(
        localStorageState? JSON.parse(localStorageState) : Items
    );

    const updateCartData = (newData:ICartProps['data']) => {
        setCartData(newData);
        localStorage.setItem('sweetwater-sound-test-data', JSON.stringify(newData));
    }

    return (
        <div className="App">
            <Cart data={cartData} updateCartData={updateCartData} />
        </div>
    );
}

export default App;
