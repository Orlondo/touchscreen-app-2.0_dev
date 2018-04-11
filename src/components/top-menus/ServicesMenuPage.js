import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const ServicesMenu = (props) => (
    <div className="scene">
        <div className="content">
            <div className="menu-container">
                { MenuContent.data.map((item) => 
                    <NavLink 
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button services-btn">
                            {item.label}
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
);

export default ServicesMenu;