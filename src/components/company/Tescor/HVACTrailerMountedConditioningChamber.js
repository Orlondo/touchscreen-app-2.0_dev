import React from 'react';
import CompanyMenu from '../../../data/CompanyMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const HVACTrailerMountedConditioningChamber = (props) => {

    const dataPath = CompanyMenu.pageData[0].tescor.pageData[0].HVACTrailerMountedConditioningChamber;
    
    return ( 
        <ItemButtonGenerator
            pageTitle   = {dataPath.title}
            pageBody    = {dataPath.body}
            items       = {dataPath.items}
            data        = {dataPath.items}
        />
    )  
}

export default HVACTrailerMountedConditioningChamber;