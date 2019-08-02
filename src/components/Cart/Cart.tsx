import React from 'react';
import './Cart.css';

interface ICartProps {
  data: any;
}

export function Cart(props:ICartProps) {
  return (
    <div className="cart">
      {JSON.stringify( props.data )}
    </div>
  );
}
