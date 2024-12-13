import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav>
<h1>Navbar</h1>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>
         
        <img className="gb_Od gb_Pd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" 
      srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
       https://www.gstatic.com/images/branding/product/2x/keep_2020q4_96dp.png 2x" 
       alt="Google Keep Logo" />

        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltip-text">View List</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">account_circle</span>
          <span className="tooltip-text">Accounts</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar