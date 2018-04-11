import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <NavLink to="/" className="home-btn"><button>Home</button></NavLink>
        <button onClick={goBack} className="back-btn">Back</button>
    </div>
)

/* Back Button */
const goBack = () => {
    if (window.location.pathname !== "/"){
        history.back();
    } else {

    }
}

export default Footer;
