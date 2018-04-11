import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CustomTestingPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].customTesting.title}
            pageBody    = {CompanyMenu.pageData[0].customTesting.body}
            items       = {CompanyMenu.pageData[0].customTesting.items}
            data        = {CompanyMenu.pageData[0].customTesting.items}
        />
        
    )  
}

export default CustomTestingPage;