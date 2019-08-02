import React from 'react';
import './Cart.css';

interface ICartItem {
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

interface ICartProps {
    data: ICartItem[];
}

export function Cart(props: ICartProps) {
    return (
        <div className="cart">
            {props.data.map((cartItem) => {
                return <div className="cart-item">
                    {cartItem.productName}
                </div>
            })}
            {JSON.stringify(props.data)}
        </div>
    );
}
