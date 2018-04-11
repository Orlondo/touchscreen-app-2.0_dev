import React from 'react';
import BrakesSubMenuData from '../../../../data/BrakesSubMenuData';
import ItemButtonGenerator from '../../../ItemButtonGenerator';

const M3640HighSpeedRailDynoPage = (props) => {
    return ( 
        <ItemButtonGenerator
            pageTitle   = {BrakesSubMenuData.pageData[0].m3640HighSpeedRailDyno.title}
            pageBody    = {BrakesSubMenuData.pageData[0].m3640HighSpeedRailDyno.body}
            items       = {BrakesSubMenuData.pageData[0].m3640HighSpeedRailDyno.items}
            data        = {BrakesSubMenuData.pageData[0].m3640HighSpeedRailDyno.items}
        />
    )  
}

export default M3640HighSpeedRailDynoPage;