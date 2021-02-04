import React from 'react'
import { InlineIcon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'
import './Info.css'

const contactDetails = [
    {
        value: 'Akmenės raj., Papilė, Kranto g. 2',
        icon: locationIcon,
    },
    { value: '+37060334353', icon: phoneIcon },
    { value: 'Ignas.Sungaila@gmail.com', icon: emailIcon },
];

const renderContactDetails = () =>
    contactDetails.map(detail => (
        <p key={detail.value} className="info-detail">
            <InlineIcon icon={detail.icon} /> {detail.value}
        </p>
    ));


const Info = () => (
    <section className="info">
        <h2 className="info-h2">Kontaktinė Informacija</h2>


        <div className="info-details-container">{renderContactDetails()}</div>

    </section>
);

export default Info