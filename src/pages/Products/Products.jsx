import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../../components/PageLayout/PageLayout";
import ProductsList from '../../components/Products/ProductsList';
import Cart from "../../components/Cart/Cart";

const useStyles = makeStyles({
    root: {
        display:'flex',
    },
    cart: {
        backgroundColor:"white",
        minWidth: '20vw'


    }

});


export default function Products() {
    const classes = useStyles();

    return(
            <PageLayout>
                <div className={classes.root}>
                    <ProductsList />
                    <div className={classes.cart} >
                        <Cart />
                    </div>
                </div>
            </PageLayout>
    );

}