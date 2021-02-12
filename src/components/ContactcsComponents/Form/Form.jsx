import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './Form.css'


function Form() {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('BeeMail', 'BeeTemplate', e.target, 'user_GGpJfCk7AaNp4sNG9AAPi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSent(true);
        e.target.reset();
    }


return(

    <ValidatorForm
        className="form"
        onSubmit={sendEmail}
        onError={errors => console.log(errors)}
    >

        <TextValidator
            className="form-input"
            id='name'
            type='text'
            label='Jūsų vardas'
            onChange={e => {
                const newName = e.target.value;
                setName(newName);
            }}
            name='name'
            value={name}
            InputLabelProps={{ shrink: true }}
            placeholder='Petras Petraitis'
            validators={['required', 'minStringLength:4']}
            errorMessages={['Šis laukas privalomas', 'Mažai simbolių']}
        />

        <TextValidator
            className="form-input"
            id='tel'
            type='tel'
            label='Telefono numeris'
            onChange={e => {
                const newNumber = e.target.value;
                setNumber(newNumber);
            }}
            name='number'
            value={number}
            InputLabelProps={{ shrink: true }}
            placeholder='+370612345'
            validators={['matchRegexp:(\\+(3706)\\d{5})', 'minStringLength:12', 'maxStringLength:12']}
            errorMessages={['Neteisingas numerio formatas (+3706*******)', '', 'Neteisingas numerio formatas (+3706*******)']}
        />

        <TextValidator
            className="form-input"
            id='email'
            type='email'
            label='Elektroninis paštas'
            onChange={e => {
                const newEmail = e.target.value;
                setEmail(newEmail);
            }}
            name='email'
            value={email}
            InputLabelProps={{ shrink: true }}
            placeholder='tavo@elpastas.lt'
            validators={['required', 'isEmail']}
            errorMessages={['Šis laukas privalomas', 'Neteisingas el. paštas']}
        />

        <TextValidator
            className="form-textarea"
            id='message'
            type='textarea'
            label='Jūsų žinutė'
            onChange={e => {
                const nemMessage = e.target.value;
                setMessage(nemMessage);
            }}
            name='message'
            multiline
            value={message}
            InputLabelProps={{ shrink: true }}
            placeholder='Kuo mes jums galime padėti?'
            validators={['required', 'minStringLength:5', 'maxStringLength:100']}
            errorMessages={['Šis laukas privalomas', 'Per mažai simbolių', 'Per daug simbolių']}
        />

        <IconButton type="submit" className="form-submit">
            <SendIcon style={{fontSize: 80}}/>
        </IconButton>

           {sent === true ? (
             <p className="messageSent"> Žinutė išsiūsta! </p>
             ) : (<></>)}

    </ValidatorForm>

    );}



export default Form