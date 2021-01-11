import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <NavLink className="navigation" activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink className="navigation" activeClassName="active" to="/items">
                Items
            </NavLink>
        </>
    );
};

export default NavBar;