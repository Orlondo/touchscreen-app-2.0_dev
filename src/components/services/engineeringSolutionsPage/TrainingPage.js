import React from 'react';
import CompanyMenu from '../../../data/ServicesMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const TrainingPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].training.title}
            pageBody    = {CompanyMenu.pageData[0].training.body}
            items       = {CompanyMenu.pageData[0].training.items}
            data        = {CompanyMenu.pageData[0].training.items}
        />
        
    )  
}

export default TrainingPage;