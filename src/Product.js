import React from 'react';
import './Product.css';
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
  const[{basket}, dispatch] = useStateValue();

  // console.log(basket);

  const addToBasket = () => {
    // Dispatch the item into the Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>    
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}    
        </div>
      </div>

      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to Basket
        <div className='basket__icon'>
          <ShoppingBasket />
        </div>
      </button>
    </div>
  )
}

export default Product