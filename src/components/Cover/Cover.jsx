import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import cover from '../../assets/cover.jpg'


const useStyles = makeStyles({
    cover:{
        backgroundImage: `url(${cover})`,
        height: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '3rem',
        fontFamily: 'cursive',
        opacity:'1'
    }

});


export default function Cover(){
    const classes = useStyles();

    return(
        <Box className={classes.cover}>
            <Box>Šiek tiek apie mūsų bityną.</Box>
        </Box>

    );


}