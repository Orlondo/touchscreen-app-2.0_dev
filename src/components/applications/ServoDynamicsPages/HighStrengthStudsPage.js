import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HighStrengthStudsPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].highStrengthStuds.title}
            pageBody    = {CompanyMenu.pageData[0].highStrengthStuds.body}
            items       = {CompanyMenu.pageData[0].highStrengthStuds.items}
            data        = {CompanyMenu.pageData[0].highStrengthStuds.items}
        />
    )  
}

export default HighStrengthStudsPage;