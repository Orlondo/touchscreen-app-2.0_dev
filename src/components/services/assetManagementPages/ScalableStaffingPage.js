import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const ScalableStaffingPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].scalableStaffing.title}
            pageBody    = {CompanyMenu.pageData[0].scalableStaffing.body}
            items       = {CompanyMenu.pageData[0].scalableStaffing.items}
            data        = {CompanyMenu.pageData[0].scalableStaffing.items}
        />
    )  
}

export default ScalableStaffingPage;