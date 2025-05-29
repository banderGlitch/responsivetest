import React from 'react';
import './Layout.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';  

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <main className="layout__content">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout; 