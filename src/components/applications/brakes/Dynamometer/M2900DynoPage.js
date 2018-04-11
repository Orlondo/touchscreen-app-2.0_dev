import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M2900DynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {BrakesSubMenuData.pageData[0].m2900Dyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m2900Dyno.body}
            items       = {BrakesSubMenuData.pageData[0].m2900Dyno.items}
            data        = {BrakesSubMenuData.pageData[0].m2900Dyno.items}
        />
    )  
}

export default M2900DynoPage;