import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';



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
            <ul>
                {cart.map(item => (
                    <li>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

    const mapStateToProps = state => {
        return {
            cart: state.shop.cart
        };
    };

    export default connect(mapStateToProps)(Cart)
