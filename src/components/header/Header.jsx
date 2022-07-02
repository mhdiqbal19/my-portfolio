import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi, My name is..</h5>
                <h1>Muhammad Iqbal</h1>
                <h5 className='text-light'>I'm Junior Frontend Engineer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#footer" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header