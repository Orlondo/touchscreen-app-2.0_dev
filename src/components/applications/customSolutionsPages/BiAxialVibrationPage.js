import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BiAxialVibrationPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].biAxialVibration.title}
            pageBody    = {CompanyMenu.pageData[0].biAxialVibration.body}
            items       = {CompanyMenu.pageData[0].biAxialVibration.items}
            data        = {CompanyMenu.pageData[0].biAxialVibration.items}
        />
    )  
}

export default BiAxialVibrationPage;