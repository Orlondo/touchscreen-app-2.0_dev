import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../../data/BrakesSubMenuData';

const SubSystemsPage = () => (
    <div className="scene">
        <div className="menu-container">
            { MenuContent.data[2].map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )}
        </div>
    </div>
)

export default SubSystemsPage;