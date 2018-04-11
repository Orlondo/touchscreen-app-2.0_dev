import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const AssetManagementPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="section-header">
                <h2>{MenuContent.headerContent[0].asset_management.title}</h2>
                <p>{MenuContent.headerContent[0].asset_management.body}</p>
            </div>
            { MenuContent.assetManagement.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )} 
        </div>
    </div>
)

export default AssetManagementPage;