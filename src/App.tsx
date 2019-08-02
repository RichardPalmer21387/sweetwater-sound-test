import React from 'react';
import './App.css';

import Items from './data/items.json';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Cart data={Items}/>
    </div>
  );
}

export default App;
