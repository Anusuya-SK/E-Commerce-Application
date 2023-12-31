import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const[{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticate = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img 
                className='header__logo' 
                alt='Amazon Logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
        </Link>

        <div className='header__search'>
            <input className='header__searchInput' placeholder='Search Amazon' type='text' /> 
            <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <Link to={!user && '/login'}>
                <div className='header__option' onClick={handleAuthenticate}>
                    <span className='header__optionLineOne'>Hello, {user? user.email : 'Guest'}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <Link to={(!user || user) && '/checkout'}>
                <div className='header__optionBasket'>                 
                    <ShoppingCartIcon />                  
                    <span className='header__optionLineTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header