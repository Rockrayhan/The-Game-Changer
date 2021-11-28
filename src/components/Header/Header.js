import React from 'react';
import './Header.css' ;

const Header = () => {
    return (
        <div className="container header rounded-3 p-3 mt-2">
            <h1 className="header-title mt-4 mb-5">The Game Changer</h1>
            <div className="header-info">
            <h4>Select your Game Changer</h4>
            <p>Here are some vidoe game characters who just changed the gaming industry.</p>
            <h4> Total Budget: 120 Million </h4>
            </div>
        </div>
    );
};

export default Header;