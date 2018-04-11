import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const AxleImpactTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].axleImpactTester.title}
            pageBody    = {CompanyMenu.pageData[0].axleImpactTester.body}
            items       = {CompanyMenu.pageData[0].axleImpactTester.items}
            data        = {CompanyMenu.pageData[0].axleImpactTester.items}
        />
    )  
}

export default AxleImpactTesterPage;