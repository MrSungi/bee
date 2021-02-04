import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import formInputs from '../../../static/formInputs'
import './Form.css'


function Form() {
    const [sent, setSent] = useState(false);


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
    <form className="form" onSubmit={sendEmail} >
        <h2 className="form-h2">Parašykite mums</h2>

        {formInputs.map(input => (
            <label key={input.label} id={input.id} className="form-label">
                {input.label}

                {input.type === 'textarea' ? (
                    <textarea className="form-textarea" placeholder={input.placeholder} name={input.name}/>
                ) : (
                    <input
                        className="form-input"
                        type={input.type}
                        placeholder={input.placeholder}
                        name ={input.name}
                    />
                )}
            </label>
        ))}

        <IconButton type="submit" className="form-submit">
            <SendIcon style={{fontSize: 80}}/>
        </IconButton>

    {sent === true ? (
        <p className="messageSent"> Žinutė išsiūsta! </p>
    ) : (<></>)}



    </form>
);}

export default Form