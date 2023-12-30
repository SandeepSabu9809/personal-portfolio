import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mhnlxk', 'template_8va1jyo', form.current, 'mjA_3bMfdpqMUufIr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <a href="mailto:sandeepsabu321@gmail.com" target='_blank' >
             <article className='contact__option  '>
              <MdOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>sandeepsabu321@gmail</h5>
              <a href="mailto:sandeepsabu321@gmail.com" target='_blank'>Send a message</a>
             </article>
          </a>
          <a href="https://m.me/sandeepsabu.sandeepsabu.9" target='_blank'>
            <article className='contact__option  '>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>codeNeptunetutorials</h5>
              <a href="https://m.me/sandeepsabu.sandeepsabu.9" target='_blank'>Send a message</a>
             </article>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+919809152413" target='_blank'>
            <article className='contact__option  '>
              <FaWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+91 9809152413</h5>
              <a href="https://api.whatsapp.com/send?phone=+919809152413" target='_blank'>Send a message</a>
             </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact
