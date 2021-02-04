import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const NavBar = () => {
    return (
        <>
            <NavLink className="navigation" activeClassName="active" to="/apiary">
                Bitynas
            </NavLink>
            <NavLink className="navigation" activeClassName="active" to="/items">
                Produktai
            </NavLink>
            <NavLink className="navigation" activeClassName="active" to="/contacts">
                Kontaktai
            </NavLink>
            <NavLink className="navigation" activeClassName="active" to="/login">
                <AccountCircleIcon />
            </NavLink>
        </>
    );
};

export default NavBar;