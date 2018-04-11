import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const Certifications_RegistrationsPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].certifications_registrations.title}
            pageBody    = {CompanyMenu.pageData[0].certifications_registrations.body}
            items       = {CompanyMenu.pageData[0].certifications_registrations.items}
            data        = {CompanyMenu.pageData[0].certifications_registrations.items}
        />
    )  
}

export default Certifications_RegistrationsPage;