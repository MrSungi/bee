import {makeStyles, withStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({
    root: {
        width: 300,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    media: {
        height: 250,
    },
    title:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize:'1.5rem',
        color: 'black'
    },
    description:{
        fontFamily: 'Nunito',
        fontSize:'1.1rem',
        color:'black'
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    },
    price:{
        fontFamily: 'Nunito',
        fontSize:'1.5rem',
        color:'black',
        textAlign:'end',
    },
    formControl: {
        margin: '1',
        minWidth: 120,
        left: 150,
    },
    selectEmpty: {
        marginTop: '2',
    },
    button:{
        display:"flex",
        marginTop: '10px',
        left: 80
    }
});

