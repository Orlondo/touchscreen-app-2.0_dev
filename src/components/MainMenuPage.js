import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../data/MainMenuData';
import ImagePreloader from '../components/ImagePreloader';
ImagePreloader();

const MenuData = (props) => (
    <div className="scene">
        <div className="content">
            <div className="title">This is the updated touchscreen app</div>
            <div className="menu-container">
                { MenuContent.data.map((item) => 
                    <NavLink 
                        to={item.pathname} 
                        key={item.label}
                        style={{backgroundImage:`url(${item.backgroundImage})`}} 
                        className="menu-button mainMenu-btn">
                            {item.label}
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
);

export default MenuData;