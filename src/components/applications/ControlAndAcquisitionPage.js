import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const ControlAndAcquisitionPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div>
                <h2>{MenuContent.headerContent[0].control_and_acquisition.title}</h2>
                <p>{MenuContent.headerContent[0].control_and_acquisition.body}</p>
            </div>
            { MenuContent.controlAndAcquisition.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )}
        </div>
    </div>
)

export default ControlAndAcquisitionPage; 