import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const offRoadPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].offRoad.title}
            pageBody    = {CompanyMenu.pageData[0].offRoad.body}
            items       = {CompanyMenu.pageData[0].offRoad.items}
            data        = {CompanyMenu.pageData[0].offRoad.items}
        />
        
    )  
}

export default offRoadPage;