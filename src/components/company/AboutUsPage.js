import React from 'react';
import CompanyMenu from '../../data/CompanyMenuData';
import ItemButtonGenerator from '../ItemButtonGenerator';

const AboutUsPage = () => {
    return ( 
        <div 
            className="scene" 
            style={{backgroundImage:`url(${CompanyMenu.pageData[0].aboutUs.backgroundImage})`}}
        >
            <ItemButtonGenerator
                pageTitle   = {CompanyMenu.pageData[0].aboutUs.title}
                pageBody    = {CompanyMenu.pageData[0].aboutUs.body}
                items       = {CompanyMenu.pageData[0].aboutUs.videos}
                data        = {CompanyMenu.pageData[0].aboutUs.videos}
            />
        </div>
    )     
}

export default AboutUsPage;