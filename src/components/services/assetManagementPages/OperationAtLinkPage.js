import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const OperationAtLinkPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].operationsAtLink.title}
            pageBody    = {CompanyMenu.pageData[0].operationsAtLink.body}
            items       = {CompanyMenu.pageData[0].operationsAtLink.items}
            data        = {CompanyMenu.pageData[0].operationsAtLink.items}
        />
        
    )  
}

export default OperationAtLinkPage;