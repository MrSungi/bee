import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import papile from '../../assets/papile.png';



const useStyles = makeStyles({
    text:{
        display: 'flex',
        marginLeft: '30px',
        marginTop: '40px',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '2rem',
        fontFamily: 'cursive',

    },
    image:{
        marginTop: '20px',
        width:'250px',
        height: '150px',
        paddingRight: '50px',

    },
    paper:{
        backgroundColor:'transparent'
    }

});

export default function ApiaryInfo(){
    const classes = useStyles();

    return(
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
            <Grid item xs={9}>
                <Typography className={classes.text}>
                Mūsų bitynas yra įkurtas įspūdingo grožio ir pilno gyvos gamtos Papilės
                    miestelyje, kuris yra Ventos regioniniame parke.
                </Typography>
            </Grid>
            <Grid item xs={3} color='transparent'>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.image} src={papile} alt="papile"/>
                </Paper>
            </Grid>
        </Grid>
    );
}