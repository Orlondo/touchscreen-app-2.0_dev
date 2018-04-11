import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/ServicesMenuData';

const ProvingGroundsPage = () => (
    <div className="scene">
        <div className="menu-container">
            <div class="section-header">

                <h2>{MenuContent.headerContent[0].proving_grounds.title}</h2>
                <p>{MenuContent.headerContent[0].proving_grounds.body}</p>
            </div>
            { MenuContent.provingGrounds.map((item) => 
                <NavLink to={item.pathname} key={item.label} className="menu-button sub-menu-btn">
                    {item.label}
                </NavLink>
            )} 
        </div>
    </div>
)

export default ProvingGroundsPage;