import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className='NavBar_Container'>
      <button className='nav-toggle' onClick={toggleNavItems}>
        <i className='fa fa-bars menu-button-icon' aria-hidden='true'></i>
      </button>
      <ul className={`nav ${showNavItems ? 'show' : ''}`}>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-suitcase' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-calculator' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-video-camera' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-bell' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-book' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-address-book-o' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-phone' aria-hidden='true'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <i className='fa fa-user' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
