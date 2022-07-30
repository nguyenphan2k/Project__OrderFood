import React from 'react'

function BannerName({ name, discount, link }) {
     return (
          <div className='bannerContent'>
               <h3>Hello {name}</h3>
               <p>Get free discount for
                    <span> {discount} </span> 
                    when you purchase
               </p>
               <a href={link}>Learn More</a>
          </div>
     )
}

export default BannerName