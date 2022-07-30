import React, { useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import './Header.css'

function Header() {
  useEffect(() => {
    const toggleClick = document.querySelector('.toggleMenu');
    
    toggleClick.addEventListener('click', () => {
      document.querySelector('.rightMenu').classList.toggle('active')
    })
  }, [])
  return (
    <header>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc'
        alt=''
        className='logo' />

      <div className='inputBox'>
        <SearchIcon className='searchIcon' />
        <input type='text' placeholder='Search' />
      </div>

      <div className='shoppingCart'>
        <ShoppingCart className='cart' />
        <div className='cart_content'>
          <p>2</p>
        </div>
      </div>

      <div className='profileContainer'>
        <div className='imgBox'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937'
            alt=''
            className='profilePic'
          />
        </div>
        <h2 className='userName'>Nguyen Phan</h2>
      </div>

      <div className='toggleMenu'>
        <BarChartIcon className='toggleIcon' />
      </div>
    </header>
  )
}

export default Header