import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Structural_FatiguePage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].structural_fatigue.title}
            pageBody    = {CompanyMenu.pageData[0].structural_fatigue.body}
            items       = {CompanyMenu.pageData[0].structural_fatigue.items}
            data        = {CompanyMenu.pageData[0].structural_fatigue.items}
        />
        
    )  
}

export default Structural_FatiguePage;