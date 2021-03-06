import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
  const[{basket},dispatch]=useStateValue();
  return (

    <div className='header'>
      <Link to="/">
      <img
        className='header_logo'
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="adi"/>
      </Link>
      
      <div
        className="header__search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon'/>
      </div>
    
      <div
      className='header__nav'>
      <Link to="/login">
        <div className='header__option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'> Sign In</span>
      
      </div>
      </Link>
        <div className='header__option'>
        <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        
        </div>
        <div className='header__option'>
        <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header__basketCount'>
          {basket?.length}
          </span>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header