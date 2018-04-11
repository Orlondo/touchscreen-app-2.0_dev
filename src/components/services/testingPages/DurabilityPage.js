import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const DurabilityPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].durability.title}
            pageBody    = {CompanyMenu.pageData[0].durability.body}
            items       = {CompanyMenu.pageData[0].durability.items}
            data        = {CompanyMenu.pageData[0].durability.items}
        />
        
    )  
}

export default DurabilityPage;