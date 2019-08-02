import React, { useEffect, useState, ChangeEvent } from 'react';
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

    const handleQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if(value > 0 && value < props.available){
            setQuantity(value);
        }else{
            setQuantity(value < 1 ? 1 : props.available);
        }
    }

    return <div className="cart-item-info">
        <div className="product-name">{props.productName}</div>
        <div className="description">{props.description}</div>
        <div className="quantity">
            <input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange}
            />
        </div>
        <div className="price">{props.price}</div>
        <div className="sub-total">{props.price * quantity}</div>
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