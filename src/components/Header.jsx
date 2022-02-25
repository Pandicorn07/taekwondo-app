import React from "react";
import '../sass/Header.sass';
import logo from '../assets/logo.svg'

const Header = ({title}) => {
    return (
        <div className="header">
            <img src={logo} alt="" id="heading" />
            <p>{title}</p>
        </div>
    );
};

export default Header;