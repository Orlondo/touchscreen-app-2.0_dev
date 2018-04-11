import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const EngineeringSolutionsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="section-header">
                <h2>{MenuContent.headerContent[0].engineering_solutions.title}</h2>
                <p>{MenuContent.headerContent[0].engineering_solutions.body}</p>
            </div>
            { MenuContent.engineeringSolutions.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )} 
        </div>
    </div>
)

export default EngineeringSolutionsPage;