import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="main">
        <header className="header">
            <h1>Responsive Demo</h1>
            <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    </div>
  )
}

export default Header;
