import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "./conekta_logo.png";

import "./header.style.css";

const Header = () => {
return (
    <div className="header-menu">
        <div className="mobile-menu">
            <MenuIcon style={{color:"#c1c1c1"}}/>
        </div>
        <div className="content-header">
            <p className="user-name">Julio Cesar M.</p>
        <img className="user" src="https://avatars0.githubusercontent.com/u/10692925?s=460&u=9bb328dec8d30d46ab8795eeea1e314b5050fe31&v=4" />
        </div>
    </div>
)
}

export default Header;