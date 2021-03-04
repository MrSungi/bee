import React, {useEffect, useState} from 'react';
import * as styles from './styles';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shoppingActions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ColorButton from "../ColorButton/ColorButton";




const Product = ({ productData, addToCart }) => {
    const classes = styles.useStyles();
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
                    image={productData.image}
                    title={productData.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {productData.name}
                    </Typography>
                    
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.price}
                    >
                        {productData.price}
                    </Typography>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel >Dydis</InputLabel>
                        <Select
                        value={size}
                        onChange={handleChange}
                        label="Size"
                        >
                        {productData.size.map(sizes=>(
                            <MenuItem value={sizes} key={sizes}>
                                <em>{sizes}</em>
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <ColorButton
                        onClick={() => addToCart(productData.id)}
                        variant='contained'
                        color='primary'
                        className={classes.button}
                    >
                    Į krepšelį
                    </ColorButton>
                </CardContent>
        </Card>
    );
};

    const mapDispatchToProps = (dispatch) => {
        return {
            addToCart: (id) => dispatch(addToCart(id)),
        };
    };

    export default connect(null, mapDispatchToProps)(Product);