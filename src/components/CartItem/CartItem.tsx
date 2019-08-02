import React from 'react';
import './CartItem.css';

export interface ICartItem {
    image: string;
    url: string;
    manufacturer: string;
    productName: string;
    itemid: string;
    quantity: number;
    price: number;
    description: string;
    available: number;
}


export function CartItem(props:ICartItem){
    return <div className="cart-item">

    </div>
}