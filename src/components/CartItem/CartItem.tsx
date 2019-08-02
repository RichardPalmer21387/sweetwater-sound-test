import React, { useEffect, useState, ChangeEvent } from 'react';
import './CartItem.css';
import { formatCurrency } from '../../uils/formatCurrency';

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

type TCartItemProps = ICartItem & {
    updateCartItem: (newCartItemData:Partial<ICartItem>)=>void;
    removeItem: ()=>void;
}

function Info(props:TCartItemProps){

    const handleQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if(value > 0 && value < props.available){
            props.updateCartItem({quantity: value });
        }else{
            const limit = value < 1 ? 1 : props.available;
            props.updateCartItem({quantity: limit });
        }
    }

    return <div className="cart-item-info">
        <div className="product-name">{props.productName}</div>
        <div className="manufacturer">Manufacturer: {props.manufacturer}</div>
        <div className="description">{props.description}</div>
        <div className="quantity-form">
            <div className="quantity">Quantity in Cart: 
                <input 
                    type="number" 
                    value={props.quantity} 
                    onChange={handleQuantityChange}
                />
            </div>
            <div className="price">Price: {formatCurrency(props.price)}</div>
            <div className="sub-total">Subtotal: {formatCurrency(props.price * props.quantity)}</div>
        </div>
    </div>
}

export function CartItem(props:TCartItemProps){
    return <div className="cart-item">
        <a href={props.url} className="product-image">
            <img src={props.image} alt={props.productName} />
        </a>
        <Info {...props} />
        <div className='remove-btn'><button title="remove" onClick={props.removeItem}>X</button></div>
    </div>
}