import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const VehicleToDynoPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].vehicleToDyno.title}
            pageBody    = {CompanyMenu.pageData[0].vehicleToDyno.body}
            items       = {CompanyMenu.pageData[0].vehicleToDyno.items}
            data        = {CompanyMenu.pageData[0].vehicleToDyno.items}
        />
        
    )  
}

export default VehicleToDynoPage;