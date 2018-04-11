import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ApplicationsMenuData';

const CustomSolutionsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div>
                <h2>{MenuContent.headerContent[0].custom_solutions.title}</h2>
                <p>{MenuContent.headerContent[0].custom_solutions.body}</p>
            </div>
            { MenuContent.customSolutions.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )} 
        </div>
    </div>
)

export default CustomSolutionsPage;