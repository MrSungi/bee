import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CartItem from "../CartItem/CartItem";



const useStyles = makeStyles(() => ({
    root: {
    },
    title:{
        textAlign: 'center',
        marginTop: '3vw'
    }
}));

const Cart = ({ cart }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title} > Krepšelis </h1>
            <div>
                {cart.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

    const mapStateToProps = state => {
        return {
            cart: state.shop.cart
        };
    };

    export default connect(mapStateToProps)(Cart)
