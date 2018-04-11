import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const PerformancePage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].perfomance.title}
            pageBody    = {CompanyMenu.pageData[0].perfomance.body}
            items       = {CompanyMenu.pageData[0].perfomance.items}
            data        = {CompanyMenu.pageData[0].perfomance.items}
        />
        
    )  
}

export default PerformancePage;