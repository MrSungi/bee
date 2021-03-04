import React, { useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CartItem from "../CartItem/CartItem";
import ColorButton from "../ColorButton/ColorButton";

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
        display:'flex',
        textAlign:'right',
        margin: '2vw',
        fontSize:'1rem',
        justifyContent:'space-between'
    },
    total: {
        marginTop:'0.5vw'
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
                        <ColorButton
                            onClick={() => alert('Implement this!')}
                            variant='contained'
                            color='primary'
                        >
                            Apsipirkti
                        </ColorButton>
                        <span className={classes.total}>Iš viso: ${totalPrice}</span>
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
