import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const VehicleDynamicsPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].vehicleDynamics.title}
            pageBody    = {CompanyMenu.pageData[0].vehicleDynamics.body}
            items       = {CompanyMenu.pageData[0].vehicleDynamics.items}
            data        = {CompanyMenu.pageData[0].vehicleDynamics.items}
        />
    )  
}

export default VehicleDynamicsPage;