import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Logo from '../../../public/assets/Logo.png';

const useStyles = makeStyles({
    logo: {
        maxWidth: 160,
    },
    toolbar:{
        justifyContent: 'space-between',
    },
});

const Header = () => {
    const classes = useStyles();

    return(
        <>
            <AppBar color='transparent' position="static" >
                <Toolbar className={classes.toolbar}>
                    <img src={Logo} alt='logo' className={classes.logo}/>
                    <div>
                        <NavBar/>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;