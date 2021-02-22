import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import papile from '../../assets/papile.png';
import papileview from '../../assets/papileview.JPG';
import apiaryinfo from '../../assets/apiaryinfo.jpg';



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
    imagelogo:{
        marginTop: '20px',
        width:'250px',
        height: '150px',
        paddingRight: '50px',

    },
    image:{
        marginTop: '20px',
        width:'300px',
        height: '250px',
        padding: '5px',
        clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',

    },
    paper:{
        backgroundColor:'transparent',
    }

});

export default function ApiaryInfo(){
    const classes = useStyles();

    return(
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">

            <Grid item xs={10} >
                <Typography className={classes.text}>
                Mūsų bitynas yra įkurtas įspūdingo grožio ir pilno gyvos gamtos Papilės
                    miestelyje, kuris yra Ventos regioniniame parke.
                </Typography>
            </Grid>
            <Grid item xs  color='transparent'>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.imagelogo} src={papile} alt="papile"/>
                </Paper>
            </Grid>


            <Grid item xs  color='transparent'>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.image} src={papileview} alt="papile"/>
                </Paper>
            </Grid>
            <Grid item xs={10} >
                <Typography className={classes.text}>
                    Nešamas medus yra iš gausios gamtos Ventos paupio. Visiškai natūralus, saldus ir sveikas pavasarinis medus,
                     bei neišpasakytasis vasaros Liepų medus.
                </Typography>
            </Grid>

            <Grid item xs={9} >
                <Typography className={classes.text}>
                    Kruopščiai aprūpintą ir prižiūrimą bityną sudaro 30 šeimų. Mūsų gaminami, bei tiekiami, produktai yra
                    100% natūralus. Taip pat kuriame mielas dovanėles tam tikroms šventinėmis progomis.
                </Typography>
            </Grid>
            <Grid item xs  color='transparent'>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.image} src={apiaryinfo} alt="papile"/>
                </Paper>
            </Grid>

        </Grid>
    );
}