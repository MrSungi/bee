import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './Form.css'

const formInputs = [
    { id: 'name', type: 'text', label: 'Jūsų vardas', placeholder: 'Petras Petraitis' },
    {
        id: 'tel',
        type: 'tel',
        label: 'Telefono numeris',
        placeholder: '+370612345',
    },
    {
        id: 'email',
        type: 'email',
        label: 'Elektroninis paštas',
        placeholder: 'you@example.com',
    },
    {
        id: 'message',
        type: 'textarea',
        label: 'Jūsų žinutė',
        placeholder: 'Kuo mes jums galime padėti?',
    },
];

const Form = () => (
    <form className="form">
        <h2 className="form-h2">Parašykite mums</h2>

        {formInputs.map(input => (
            <label key={input.label} id={input.id} className="form-label">
                {input.label}

                {input.type === 'textarea' ? (
                    <textarea className="form-textarea" placeholder={input.placeholder} />
                ) : (
                    <input
                        className="form-input"
                        type={input.type}
                        placeholder={input.placeholder}
                    />
                )}
            </label>
        ))}

        <Icon className="form-submit" icon={sendCircle} />

        {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
    </form>
);

export default Form