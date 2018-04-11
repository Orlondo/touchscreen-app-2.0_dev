import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const BrakesMenuPage = (props) => (
    <div className="scene">
        <div className="menu-container">
            <div>
                <h2>{MenuContent.headerContent[0].brakes.title}</h2>
                <p>{MenuContent.headerContent[0].brakes.body}</p>
            </div>
            { MenuContent.brakesMenus.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button applications-btn">
                    {item.label}
                </NavLink>
            )} 
        </div>
    </div>
)

export default BrakesMenuPage;