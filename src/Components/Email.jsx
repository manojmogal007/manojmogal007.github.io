import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'
import { useContext } from 'react';
import { Navcontext } from '../Context/Navcontext';
const Email = () => {
    const {theme}=useContext(Navcontext)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_49y53le', 'template_rulwl5l', form.current, 'ZPEohtDs6dSv_9_nk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <input className={theme?'_email_input':'email_input'} type="text" name="user_name" placeholder='Name' />
        <input className={theme?'_email_input':'email_input'} type="email" name="user_email" placeholder='Email' />
        <textarea className={theme?'_email_msg':'email_msg'} name="message" placeholder='Type message here....' />
        <br/>
        <br/>
        <input className={theme?'_email_btn':'email_btn'} type="submit" value="Send" ></input>
      </form>
    );
}

export default Email
// npm install @emailjs/browser --save