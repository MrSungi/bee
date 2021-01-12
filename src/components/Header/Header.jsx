import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavBar from "../NavBar/NavBar";
import './Header.css'
import {NavLink} from "react-router-dom";



const Header = () => {
    return(
        <>
            <AppBar color='transparent' position="static">
                <Toolbar className="separate-exit" >
                    <div>
                        <NavBar/>
                    </div>
                    <NavLink className="navigation" activeClassName="active" to="/login">
                        <AccountCircleIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;