import React from "react";
import '../sass/Header.sass';

const Header = () => {
    return (
        <div className="header">
            <h1 id="heading">TWD</h1>

            <div className="burger-menu">
                <div className="line01 line"></div>
                <div className="line02 line"></div>
                <div className="line03 line"></div>
            </div>
        </div>
    );
};

export default Header;