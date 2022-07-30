import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function SubMenuContainer({name}) {
  return (
    <div className='subMenuContainer'>
         <h3>{name}</h3>
         <div className='viewAll'>
              <p>View All</p>
              <i><ArrowRightIcon /></i>
         </div>
    </div>
  )
}

export default SubMenuContainer