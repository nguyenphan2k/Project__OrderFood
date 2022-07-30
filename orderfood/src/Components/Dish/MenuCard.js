import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function MenuCard({ imgSrc, name, isActive }) {
     return (
          <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
               <div className='imgBox'>
                    <img
                         src={imgSrc}
                         alt=""
                    />
               </div>
               <h3>{name}</h3>
               <i className='loadMenu'><ArrowRightIcon /></i>
          </div>
     )
}

export default MenuCard