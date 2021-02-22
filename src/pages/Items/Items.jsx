import React from 'react';
import PageLayout from "../../components/PageLayout/PageLayout";
import Product from '../../components/Product/Product';
import data from '../../static/data';

export default function Items() {


    return(
            <PageLayout>
                <Product product={data.products[1]}/>
            </PageLayout>
    );

}