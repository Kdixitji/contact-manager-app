import React from 'react';
import { Link } from 'react-router-dom';
import "../component/NavBarStyles.css";

const NavBar = () => {
  return (
    <>
      <div className='header'>
          <Link to="/" className='navbar-brand'>
            <h2>Contact Manager App</h2></Link>
      </div>
      <ul className="nav-menu">
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/add">Add Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Charts and Maps</Link>
          </li>
        </ul>
    </>
  )
}

export default NavBar