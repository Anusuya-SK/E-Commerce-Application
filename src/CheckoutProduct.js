import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const[{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        // Remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

  return (
    <div className='checkout__product'>
        <img className='checkout__productImage' src={image} />

        <div className='checkout__productInfo'>
            <p className='checkout__productTitle'>{title}</p>
            <p className='checkout__ProductPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkout__productRating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))} 
            </div>
            <button onClick={removeFromBasket}>Remove from  Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct