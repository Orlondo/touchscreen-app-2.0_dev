import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CompanyMenu from '../../data/CompanyMenuData';
import LocationItems from '../../data/LocationItemsData';
import ItemButtonGenerator from '../ItemButtonGenerator';
import ContentBlock from '../ContentBlock';


const Locations = (props) => {
    return (
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].locations.backgroundImage})`}}
        > 
            <ItemButtonGenerator
                pageTitle               = {CompanyMenu.pageData[0].locations.title}
                pageBody                = {CompanyMenu.pageData[0].locations.body}
                items                   = {LocationItems.data}
                itemContainerHeight     = {{height:247 + 'px'}}
                data                    = {CompanyMenu.pageData}
            />
        </div>
    ) 
}

export default Locations;