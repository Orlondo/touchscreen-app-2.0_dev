import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const MT4xySpringTesterPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].mt4xySpringTester.title}
            pageBody    = {CompanyMenu.pageData[0].mt4xySpringTester.body}
            items       = {CompanyMenu.pageData[0].mt4xySpringTester.items}
            data        = {CompanyMenu.pageData[0].mt4xySpringTester.items}
        />
    )  
}

export default MT4xySpringTesterPage;