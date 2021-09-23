import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return(
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
        <h1>Wayo Home page</h1>
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
    <>
      <Link to="/Login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cart">Your cart</Link>
    </>
  )}
    </nav>
      </div>
    </header>
    )
    

}

export default Nav;