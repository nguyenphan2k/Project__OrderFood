import React, { useState, useEffect } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import { Items } from '../../Components/Data'
import { useStateValue } from '../../Components/StateProvider'
import { actionType } from '../../Components/reducer'
let cartData = []

function ItemCard({ imgSrc, name, price, ratings, itemId }) {
     const [isFavourite, setFavourite] = useState(false)
     const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
     const [isCart, setCart] = useState(null)
     const [{}, dispatch] = useStateValue()

     useEffect(() => {
          const Heart = document
               .querySelectorAll('.isfavourite')
          function setHeart() {
               Heart.forEach((n) => n.classList.remove('active'))
               this.classList.add('active')
          }
          Heart.forEach((n) => n.addEventListener('click', setHeart))
          if (isCart) {
               cartData.push(isCart)
               dispatch({
                    type: actionType.SET_CART,
                    cart: cartData,
               })
          }
     }, [isCart]) 

     const handleClick = (value) => {
          setCurrentValue(value)
     }
     return (
          <div className='itemCard' id={itemId}>
               <div className={`isfavourite ${isFavourite ? 'active' : ''}`}
                    onClick={() => setFavourite(!isFavourite)}
               >
                    <FavoriteIcon />
               </div>
               <div className='imgBox'>
                    <img src={imgSrc} alt={''} className='itemImg' />
               </div>
               <div className='itemContent'>
                    <h3 className='itemName'>{name}</h3>
                    <div className='bottom'>
                         <div className='ratings'>
                              {
                                   Array.apply(null, { length: 5 }).map((e, i) => (
                                        <i key={i} className={`rating ${currentValue > i ? 'orange' : 'gray'}`}
                                             onClick={() => handleClick(i + 1)}
                                        >
                                             <StarIcon />
                                        </i>
                                   ))
                              }
                              <h3 className='price'><span>$ </span>{price}</h3>
                         </div>
                         <i className='addtoCart'
                              onClick={() => setCart(Items.find(n => n.id === itemId))}>
                              <AddIcon />
                         </i>
                    </div>
               </div>
          </div>
     )
}

export default ItemCard