import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const ServoDynamicsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div>
                <h2>{MenuContent.headerContent[0].servo_hydraulic.title}</h2>
                <p>{MenuContent.headerContent[0].servo_hydraulic.body}</p>
            </div>
            { MenuContent.servoDynamics.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )}
        </div>
    </div>
)

export default ServoDynamicsPage;