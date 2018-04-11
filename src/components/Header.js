import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../data/MainMenuData';

const Header = () => (
    <div className="header">
        <div className="header-nav-container">
            { MenuContent.data.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="header-nav-btn">
                    <button>{item.label}</button>
                </NavLink>
            )}        
        </div>
    </div>  
)

export default Header;