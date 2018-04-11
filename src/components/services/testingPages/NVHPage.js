import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const NVHPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].nvh.title}
            pageBody    = {CompanyMenu.pageData[0].nvh.body}
            items       = {CompanyMenu.pageData[0].nvh.items}
            data        = {CompanyMenu.pageData[0].nvh.items}
        />
        
    )  
}

export default NVHPage;