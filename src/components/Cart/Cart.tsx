import React from 'react';
import {CartItem, ICartItem} from '../CartItem/CartItem';

import './Cart.css';

interface ICartProps {
    data: ICartItem[];
}

export function Cart(props: ICartProps) {
    return (
        <div className="cart">
            {props.data.map((cartItem) => {
                return <CartItem {...cartItem} />
            })}
        </div>
    );
}
