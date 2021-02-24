import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../../components/PageLayout/PageLayout";
import Product from '../../components/Product/Product';
import data from '../../static/data';
import Cart from "../../components/Cart/Cart";

const useStyles = makeStyles({
    root: {
        display:'flex',
    },
    items: {
        display:'flex',
        flexFlow: 'wrap'
    },
    cart: {
        backgroundColor:"white",
        minWidth: '20vw'


    }

});


export default function Items() {
    const classes = useStyles();

    return(
            <PageLayout>
                <div className={classes.root}>
                    <div className={classes.items}>
                        {data.products.map(product=>(
                            <Product product={product} />
                        ))}
                    </div>
                    <div className={classes.cart} >
                        <Cart />
                    </div>
                </div>
            </PageLayout>
    );

}