import React from 'react'
import "./CartCard.css"
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

const CartCard = ({ name, price, image, id }) => {
  const dispatch = useDispatch();
  return (
    <div className='CartCard'>
      <div className="left_card">
        <img src={image} alt="" />
        <div className="name_price">
          <span>{name}</span>
          <span>Rs. {price}</span>
        </div>
      </div>
      <div className="right_card">
        <button onClick={() => dispatch(RemoveItem(id))}>
          Remove <RiDeleteBin2Fill />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
