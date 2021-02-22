import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../../components/PageLayout/PageLayout";
import Product from '../../components/Product/Product';
import data from '../../static/data';

const useStyles = makeStyles({
    root: {
        display:'flex',
        flexFlow: 'wrap'
    },

});


export default function Items() {
    const classes = useStyles();

    return(
            <PageLayout>
                <div className={classes.root}>
                {data.products.map(product=>(
                    <Product product={product} />
                ))}
                </div>
            </PageLayout>
    );

}