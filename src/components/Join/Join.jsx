import React, { useRef } from 'react';
import "./Join.css";
import emails from "@emailjs/browser";

const Join = () => {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

 
  emails.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <div className="join" id='join-us'>
      <div className="left-j">
        <hr/>
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className='email-conteiner' onSubmit={sendEmail}>
          <input type="email" placeholder='Enter your email'/>
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
