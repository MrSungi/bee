import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import NavBar from "../NavBar/NavBar";
import './Header.css'


const Header = () => {
    return(
        <>
            <AppBar className="header-bar" position="static">
                <Toolbar className="separate-exit">
                    <div>
                        <NavBar/>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;