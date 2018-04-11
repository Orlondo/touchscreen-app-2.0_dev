import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ChemicalPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].chemical.title}
            pageBody    = {CompanyMenu.pageData[0].chemical.body}
            items       = {CompanyMenu.pageData[0].chemical.items}
            data        = {CompanyMenu.pageData[0].chemical.items}
        />
        
    )  
}

export default ChemicalPage;