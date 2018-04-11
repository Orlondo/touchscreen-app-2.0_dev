import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const CertificationPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].certification.title}
            pageBody    = {CompanyMenu.pageData[0].certification.body}
            items       = {CompanyMenu.pageData[0].certification.items}
            data        = {CompanyMenu.pageData[0].certification.items}
        />
        
    )  
}

export default CertificationPage;