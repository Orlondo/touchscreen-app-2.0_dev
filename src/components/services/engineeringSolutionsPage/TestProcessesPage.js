import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TestProcessesPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].testProcesses.title}
            pageBody    = {CompanyMenu.pageData[0].testProcesses.body}
            items       = {CompanyMenu.pageData[0].testProcesses.items}
            data        = {CompanyMenu.pageData[0].testProcesses.items}
        />
        
    )  
}

export default TestProcessesPage;