import React, { useState } from 'react';
import {CartItem, ICartItem} from '../CartItem/CartItem';

import './Cart.css';
import { formatCurrency } from '../../uils/formatCurrency';

interface ICartProps {
    data: ICartItem[];
}

export function Cart(props: ICartProps) {
    const [itemSubtotals, setItemSubtotals] = useState(
        props.data.map(
            cartItem => cartItem.quantity * cartItem.price
        )
    );

    const setCartItemSubtotal = (cartIndex:number) => (subtotal:number) => {
        const itemSubtotalsClone = [...itemSubtotals];
        itemSubtotalsClone[cartIndex] = subtotal;
        setItemSubtotals(itemSubtotalsClone);
    }
    
    return (
        <div className="cart">
            {props.data.map((cartItem, i) => {
                return <CartItem {...cartItem} setCartItemSubtotal={setCartItemSubtotal(i)} />
            })}
            <div className="total">Total: {
                formatCurrency(
                    itemSubtotals.reduce(
                        (a, b) => {
                            return a + b;
                        }
                    )
                )
            }</div>
        </div>
    );
}
