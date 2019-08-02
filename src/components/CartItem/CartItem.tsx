import React, { useEffect, useState } from 'react';
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

function Info(props:ICartItem){
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        setQuantity(props.quantity);
    }, []);

    return <div className="cart-item-info">
        <div className="product-name">{props.productName}</div>
        <div className="description">{props.description}</div>
        <div className="quantity">
            <input 
                type="number" 
                value={quantity} 
                onChange={(e)=>{ 
                    setQuantity(Number(e.currentTarget.value)) 
                }} 
            />
        </div>
    </div>
}

export function CartItem(props:ICartItem){
    return <div className="cart-item">
        <a href={props.url}>
            <img src={props.image} alt={props.productName} />
        </a>
        <Info {...props} />
    </div>
}