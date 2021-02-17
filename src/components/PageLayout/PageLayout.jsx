import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import Background from '../../../public/assets/HoneycombHD.jpg';
import Header from '../Header/Header';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgtoundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

const PageLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            {children}
        </div>
    );
};

export default PageLayout;