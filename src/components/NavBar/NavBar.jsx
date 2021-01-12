import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


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
            <NavLink className="navigation" activeClassName="active" to="/about">
                Apie mus
            </NavLink>
        </>
    );
};

export default NavBar;