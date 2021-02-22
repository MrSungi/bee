import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
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

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);


export default function Product({product}) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    });
    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };



    return (

        <Card
            className={classes.root}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})}
            onMouseOut={()=>setState({ raised:false, shadow:1 })}
            raised={state.raised} zdepth={state.shadow}>
                <CardMedia
                    className={classes.media}
                    image={product.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {product.name}
                    </Typography>
                    
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.price}
                    >
                        {product.price}
                    </Typography>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel >Dydis</InputLabel>
                        <Select
                        value={size}
                        onChange={handleChange}
                        label="Size"
                        >
                        {product.size.map(sizes=>(
                            <MenuItem value={sizes} key={sizes}>
                                <em>{sizes}</em>
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <ColorButton
                        variant='contained'
                        color='primary'
                        className={classes.button}
                    >
                    Į krėpšelį
                    </ColorButton>
                </CardContent>
        </Card>
    );
}