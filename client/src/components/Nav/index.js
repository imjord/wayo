import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import LoginIcon from '@mui/icons-material/Login';
import ShopIcon from '@mui/icons-material/Shop';
import { IconContext } from "react-icons";

import './Nav.css';

function Nav() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return(
    <header className="navHeader">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
            <h1 className="navTitle">Wayo</h1>
        </Link>
        <nav className="text-center">
  {Auth.loggedIn() ? (
    <>
        <Link to="/profile">Me</Link>
      <a href="/" onClick={logout}>
        Logout
      </a>
    </>
  ) : (
    <div>
        <div className="pageBtns">
            <Link to="/products" className="cartBtn">Shop Now</Link>
            <Link to="/login" className="loginBtn">LoginIcon</Link>
            <Link to="/cart" className="cartBtn">ShopIcon</Link>
        </div>
    </div>
  )}
    </nav>
      </div>
    </header>
    )
    

}

export default Nav;