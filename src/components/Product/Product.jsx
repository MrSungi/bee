import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        transition: "transform 0.15s ease-in-out",
    },
    media: {
        height: 250,
    },
    title:{
      fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize:'2rem',
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
        color:'black'
    },
    formControl: {
        margin: '1',
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: '2',
      },
});

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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };



    return (
        <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
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
                        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                        >
                        {product.size.map(sizes=>(
                            <MenuItem value="" key={sizes}>
                                <em>{sizes}</em>
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.description}
                    >
                        {product.description}
                    </Typography>
                </CardContent>
        </Card>
        </Collapse>
    );
}