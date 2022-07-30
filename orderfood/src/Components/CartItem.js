import React, { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from './StateProvider'
import { actionType } from './reducer';
let cartItems = [];

function CartItem({ name, imgSrc, price, itemId }) {

     const [qty, setQty] = useState(1)
     const [{ cart }, dispatch] = useStateValue()
     const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price))

     useEffect(() => {
          cartItems = cart
          setItemPrice(parseInt(qty) * parseFloat(price))
     }, [qty]);

     const updateQuantity = (action, id) => {
          if (action === 'add') {
               setQty(qty + 1)
          } else {
               if(qty == 1){
                    cartItems.pop(id)
                    dispatch({
                         type: actionType.SET_CART,
                         cart: cartItems,
                    })
               }
               setQty(qty - 1)
          }
     }
     return (
          <div className='cartItem'>
               <div className='imgBox'>
                    <img src={imgSrc} alt='' />
               </div>
               <div className='itemSection'>
                    <h2 className='itemName'>{name}</h2>
                    <div className='itemQuantity'>
                         <span>x {qty}</span>
                         <div className='quantity'>
                              <DeleteOutlineIcon
                                   className='itemDelete'
                                   onClick={() => updateQuantity('remove', itemId)} />
                              <AddIcon
                                   className='itemAdd'
                                   onClick={() => updateQuantity('add', itemId)} />
                         </div>
                    </div>
               </div>
               <p className='itemPrice'>
                    <span className='dolorSign'>$ </span>
                    <span className='itemPriceValue'>{itemPrice}</span>
               </p>
          </div>
     )
}

export default CartItem