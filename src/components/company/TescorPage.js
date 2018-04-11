import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MenuContent from '../../data/CompanyMenuData';

const TescorPage = (props) => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${MenuContent.pageData[0].tescor.backgroundImage})`}}
        >

        <div className="menu-container">
            <div>
                {MenuContent.pageData[0].tescor.title}
                {MenuContent.pageData[0].tescor.subTitle}
            </div>
            <br />
            {MenuContent.pageData[0].tescor.body}
            <div className="selection-container">
                { MenuContent.pageData[0].tescor.subMenu.map((item) => 
                    <NavLink 
                        to={item.pathname} 
                        key={item.label} 
                        className="menu-button sub-menu-btn">
                            {item.label}
                    </NavLink>
                )}
            </div>
        </div>
    </div>
    )  
}

export default TescorPage;