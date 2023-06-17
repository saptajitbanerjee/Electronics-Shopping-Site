import React from 'react';
import {MdAddBox} from 'react-icons/md/';
import {MdIndeterminateCheckBox} from 'react-icons/md/';
import {FaRupeeSign} from 'react-icons/fa/';
import './Cart.css';
const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
  const totalPrice=cartItems.reduce((price,item)=>
    price+item.quantity*item.price,0
  )

  return (
    <div className='cart-items'>
        <div className='cart-items-header'>
            Cart Items
        </div>
        {cartItems.length===0 && (<div className="cart-items-empty">No Items Are Added</div>)}
        <div>
            {cartItems.map((item)=>(
            <div key={item.id} className="cart-item-list">
                <img className='cart-item-image' src={item.image} alt={item.name}/>
                <div className='cart-item-name'>{item.name}</div>
                <button className='cart-items-add' onClick={()=>handleAddProduct(item)}><MdAddBox/></button>
                <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}><MdIndeterminateCheckBox/></button>
                <div className='cart-items-price'><FaRupeeSign/>{item.quantity}*{item.price}</div>
            </div>
            ))}
        </div>
        <div className='total-price'><div>Total Price:</div><div><FaRupeeSign/>{totalPrice}</div></div>
    </div>
  )
}
export default Cart;