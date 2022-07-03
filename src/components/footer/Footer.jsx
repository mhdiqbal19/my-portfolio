import React from 'react'
import "./footer.css"
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="/" className='footer__logo'>MUHAMMAD IQBAL</a>

            <ul className='permalink'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://twitter.com"><ImTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; mhd_iiqbal. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer