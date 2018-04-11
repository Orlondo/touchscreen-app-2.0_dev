import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/CompanyMenuData';
import ImagePreloader from '../ImagePreloader';


ImagePreloader();

const CompanyMenu = (props) => (
    <div className="scene">
        <div className="content">
            <div className="menu-container">
                { MenuContent.data.map((item) => 
                    <NavLink 
                        to={item.pathname} 
                        key={item.label} 
                        style={{backgroundImage:`url(${item.backgroundImage})`}} 
                        className="menu-button company-btn">
                            {item.label}
                    </NavLink>
                )} 
            </div>
        </div>
    </div>
);

export default CompanyMenu;