import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const BiAxialWheelTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].biAxialWheelTester.title}
            pageBody    = {CompanyMenu.pageData[0].biAxialWheelTester.body}
            items       = {CompanyMenu.pageData[0].biAxialWheelTester.items}
            data        = {CompanyMenu.pageData[0].biAxialWheelTester.items}
        />
    )  
}

export default BiAxialWheelTesterPage;