import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Background from '../../../public/assets/HoneycombHD.jpg';
import ImageCard from "../../components/ImageCard/ImageCard";
import cards from '../../static/cards';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgtoundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigation:{
        textDecoration: 'none',
    },

}));


const Homepage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
                <Link className={classes.navigation} to={'/apiary'}>
                    <ImageCard card={cards[0]}/>
                </Link>
                <Link className={classes.navigation} to={'/items'}>
                    <ImageCard card={cards[1]}/>
                </Link>
                <Link className={classes.navigation} to={'/contacts'}>
                    <ImageCard card={cards[2]}/>
                </Link>
        </div>
    );
};

export default Homepage;