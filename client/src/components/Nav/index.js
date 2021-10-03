import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';

import './Nav.css';

function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return(
    <header className="navHeader">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
            <h1 className="navTitle">WAYO</h1>
        </Link>
        <nav className="text-center">
  {Auth.loggedIn() ? (
    <>

        {/* <Link to="/profile">Me</Link> */}

        <div className="pageBtns">
            <Link to="/products" className="cartBtn"><ShopIcon /></Link>
            <a href="/" onClick={logout} className="logoutBtn">
            <LogoutIcon />
            </a>
            <Link to="/cart" className="cartBtn"><ShoppingCartIcon /></Link>
        </div>
    </>
  ) : (

    <div>
        <div className="pageBtns">
            <Link to="/products" className="cartBtn"><ShopIcon /></Link>
            <Link to="/login" className="loginBtn"><PersonIcon /></Link>
            <Link to="/cart" className="cartBtn"><ShoppingCartIcon /></Link>
        </div>
    </div>

  )}
    </nav>
      </div>
    </header>
    )
    

}

export default Nav;