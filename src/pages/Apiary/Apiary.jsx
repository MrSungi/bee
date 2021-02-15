import React from 'react';
import PageLayout from "../../components/PageLayout/PageLayout";
import Cover from "../../components/Cover/Cover";
import ApiaryInfo from "../../components/ApiaryInfo/ApiaryInfo";

export default function Apiary() {


    return(
            <PageLayout>
                <Cover/>
                <ApiaryInfo/>
            </PageLayout>
    );

}