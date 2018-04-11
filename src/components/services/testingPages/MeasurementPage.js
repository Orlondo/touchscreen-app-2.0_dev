import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MeasurementPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].measurement.title}
            pageBody    = {CompanyMenu.pageData[0].measurement.body}
            items       = {CompanyMenu.pageData[0].measurement.items}
            data        = {CompanyMenu.pageData[0].measurement.items}
        />
        
    )  
}

export default MeasurementPage;