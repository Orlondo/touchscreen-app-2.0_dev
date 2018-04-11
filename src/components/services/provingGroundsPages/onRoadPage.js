import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const onRoadPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].onRoad.title}
            pageBody    = {CompanyMenu.pageData[0].onRoad.body}
            items       = {CompanyMenu.pageData[0].onRoad.items}
            data        = {CompanyMenu.pageData[0].onRoad.items}
        />
        
    )  
}

export default onRoadPage;