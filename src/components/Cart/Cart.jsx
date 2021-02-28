import React, { useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CartItem from "../CartItem/CartItem";

const useStyles = makeStyles(() => ({
    root: {
    },
    title:{
        textAlign: 'center',
        marginTop: '3vw'
    },
    info: {
        margin: '1vw',
    },
    summary: {
        textAlign:'right',
        margin: '2vw',
        fontSize:'1rem',
    }
}));

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        let price = 0;

        cart.forEach((item) => {
            price += item.qty * item.price;
        });

        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    return (
        <>
        <div className={classes.root}>
            <h1 className={classes.title} > Krepšelis </h1>
            {cart.length === 0 ?(
                <div className={classes.info}>
                    Jūsų krepšelis yra tuščias
                </div>
            ) : (
                <div>
                    <div>
                        {cart.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))}
                    </div>
                    <div className={classes.summary}>
                        <span>Iš viso: ${totalPrice}</span>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

    const mapStateToProps = state => {
        return {
            cart: state.shop.cart
        };
    };

    export default connect(mapStateToProps)(Cart)
