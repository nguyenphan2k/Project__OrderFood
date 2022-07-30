import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import FavoriteIcon from '@material-ui/icons/Favorite'
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BannerName from './Components/Banner/BannerName';
import SubMenuContainer from './Components/Dish/SubMenuContainer';
import MenuCard from './Components/Dish/MenuCard';
import { MenuItems, Items } from './Components/Data'
import ItemCard from './Components/Dish/ItemCard';
import DebitCard from './Components/DebitCard/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';

function App() {

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === 'buger01')
  )
  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')

    function setMenuActive() {
      menuLi.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
    }

    menuLi.forEach((n) => n.addEventListener('click', setMenuActive))


    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove('active'))
      this.classList.add('active')
    }

    const menuCards = document
      .querySelector('.rowContainer')
      .querySelectorAll('.rowMenuCard');

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  }, [isMainData, cart])

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }

  return (
    <div className="app">
      <Header />
      <main>
        <div className='mainContainer'>
          <div className='banner'>
            <BannerName name={"Nguyen"} discount={"20$"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className='deliveryPic'
            />
          </div>
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={'Menu Category'} />
            </div>
            <div className='rowContainer'>
              {
                MenuItems && MenuItems.map(data => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))
              }
            </div>
            <div className='dishitemContainer'>
              {
                isMainData && isMainData.map(item => (
                  <ItemCard
                    key={item.id}
                    itemId={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                    ratings={item.ratings}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>
          {!cart ? (
            <div></div>
          ) : (
            <div className='cartCheckOutContainer'>
              <div className='cartContainer'>
                <SubMenuContainer name={'Carts Items'} />
                <div className='cartItems'>
                  {cart && cart.map((data) => (
                    <CartItem
                    key={data.id}
                    itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price}
                    />
                  ))}
                </div>
                <div className='totalSection'>
                  <h3>Total</h3>
                  <p>
                    <span>$ </span>
                    45.0
                  </p>
                </div>
                <button className='checkOut'>Check Out</button>
              </div>
            </div>
          )}
        </div>
      </main>
      <div className='bottomMenu'>
        <ul id='menu'>
          <MenuContainer link={'#'} icon={<HomeIcon />} isHome />
          <MenuContainer link={'#'} icon={<ChatIcon />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletIcon />} />
          <MenuContainer link={'#'} icon={<FavoriteIcon />} />
          <MenuContainer link={'#'} icon={<SettingsIcon />} />
          <MenuContainer link={'#'} icon={<ArrowForwardIosIcon />} />

          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
