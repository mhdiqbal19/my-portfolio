import React from 'react'
import "./contact.css"
import { MdOutlineMail } from 'react-icons/md'
import { TbBrandMessenger } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import swal from 'sweetalert';

function sw(){
    swal("Thank you!", "Nice to meet you bro!", "success");
}

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mvhsfbi', 'template_55raj8h', form.current, 'ZdjG7POtjseT82s1L')
        form.current.reset()
        sw()
    };

    return (
        <section id='contact'>
            <h5>I'am Here</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>om.iqbal19@gmail.com</h5>
                        <a href="https://mailto:muhammadiqbal190794@gmail.com" target="">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <TbBrandMessenger className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>Muhammad Iqbal</h5>
                        <a href="https://m.me/100003079891657">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>WhatApp</h4>
                        <h5>0812-7881-3689</h5>
                        <a href="https://api.whatsapp.com/send?phone=+6281278813689">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>


            </div>

        </section>
    )
}

export default Contact