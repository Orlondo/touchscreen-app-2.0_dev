import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const WheelEndPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div>
                <h2>{MenuContent.headerContent[0].wheel_end.title}</h2>
                <p>{MenuContent.headerContent[0].wheel_end.body}</p>
            </div>
            { MenuContent.wheelEnd.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )}
        </div>
    </div>
)

export default WheelEndPage;