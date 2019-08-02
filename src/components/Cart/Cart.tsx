import React, { useState } from 'react';
import {CartItem, ICartItem} from '../CartItem/CartItem';

import './Cart.css';
import { formatCurrency } from '../../uils/formatCurrency';

export interface ICartProps {
    data: ICartItem[];
    updateCartData: (data:ICartProps['data']) => void;
}

export function Cart(props: ICartProps) {
    const removeItemFromCart = (index:number) => {
        const cloneCartData = [...props.data];
        cloneCartData.splice(index, 1);
        props.updateCartData(cloneCartData);
    }

    const updateCartItem = (index:number) => (newCartItemData:Partial<ICartItem>) => {
        const cloneCartData = [...props.data];
        cloneCartData[index] = {
            ...cloneCartData[index],
            ...newCartItemData
        }
        props.updateCartData(cloneCartData);
    }
    
    return (
        <div className="cart">
            {props.data.map((cartItem, i) => {
                return <CartItem 
                    {...cartItem} 
                    updateCartItem={updateCartItem(i)} 
                    removeItem={()=>{removeItemFromCart(i)}}
                />
            })}
            <div className="total">Total: {
                formatCurrency(
                    props.data.map((a => a.quantity * a.price)).reduce(
                        (a, b) => {
                            return a + b;
                        }
                    )
                )
            }</div>
        </div>
    );
}
