import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mhd-iqbal/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/mhdiqbal19" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><SiNetlify /></a>
        </div>
    )
}

export default HeaderSocials