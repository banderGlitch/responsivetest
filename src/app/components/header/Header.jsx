'use client'
import React, { useState } from 'react'
import './Header.scss'


const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div className="main">
      <header className="header">
        <div className="header__content">
          <h1>Responsive Demo</h1>
          <button className={`hamburger ${isDrawerOpen ? 'active' : ''}`} onClick={toggleDrawer} aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isDrawerOpen ? 'active' : ''}`}>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>About</a>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;
