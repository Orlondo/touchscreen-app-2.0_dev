import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const ApplicationsMenu = (props) => (
    <div className="scene">
        <div className="menu-container">
            { MenuContent.data.map((item) => 
                <NavLink 
                    to={item.pathname} 
                    key={item.label} 
                    className="menu-button applications-btn">           
                        {item.label}
                </NavLink>
            )} 
        </div>
    </div>
);

export default ApplicationsMenu;