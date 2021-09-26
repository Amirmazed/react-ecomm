import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'



const Header = () => {
    return (
        <div className="header">
            
            {/* <img className="logo" src={logo} alt="" /> */}
            <nav>
                <h1>Cast for next Mission Impossible movie</h1>
                <h2>Movie Budget: 250 million</h2>
            </nav>
        </div>
    );
};

export default Header;