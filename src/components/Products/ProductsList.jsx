import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Product from '../../components/Product/Product';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    items: {
        display:'flex',
        flexFlow: 'wrap'
    },
});

const ProductsList = ({ products }) => {
    const classes = useStyles();

    return(
        <div className={classes.items}>
            {products.map(product=>(
                <Product key={product.id} productData={product} />
            ))}
        </div>

    );
};

const mapStateToProps = state => {
    return{
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(ProductsList);