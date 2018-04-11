import React from 'react';
import CompanyMenu from '../../../data/ApplicationsMenuData';
import ItemButtonGenerator from '../../ItemButtonGenerator';

const SRASeriesSpinningRotatyActuatorsPage = () => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {CompanyMenu.pageData[0].sraSeriesSpinningRotatyActuators.title}
            pageBody    = {CompanyMenu.pageData[0].sraSeriesSpinningRotatyActuators.body}
            items       = {CompanyMenu.pageData[0].sraSeriesSpinningRotatyActuators.items}
            data        = {CompanyMenu.pageData[0].sraSeriesSpinningRotatyActuators.items}
        />
    )  
}

export default SRASeriesSpinningRotatyActuatorsPage;