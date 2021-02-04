import React from 'react';
import PageLayout from "../../components/PageLayout/PageLayout";
import ContactSection from "../../components/ContactcsComponents/ContactSection/ContactSection";
import Map from "../../components/Map/Map";
import location from "../../static/location";


export default function Contacts() {


    return(
            <PageLayout>

                <Map location={location} zoomLevel={17}/>
                <ContactSection/>

            </PageLayout>
    );

}