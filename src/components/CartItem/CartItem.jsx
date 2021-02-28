import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeFromCart } from "../../redux/Shopping/shoppingActions";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2vw'
    },

}));

const CartItem = ({ item, removeFromCart }) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
                <Typography variant='subtitle1'
                            component='h2'
                >
                    {item.name} x {item.qty}
                </Typography>
        <Typography variant='subtitle1'
                    component='h2'
        >
            {item.price * item.qty} €
        </Typography>
            <IconButton
                onClick={() => removeFromCart(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);