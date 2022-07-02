import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFolderChartLine } from 'react-icons/ri'

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Expirience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <RiFolderChartLine className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Project</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>10+ Worlwide</small>
                        </article>
                    </div>
                    <p>I'am a Junior Frontend Engineer with strong passion to learn new things. I am familiar with a JavaScript programming, and I have developed application system using ReactJS. Currently I am interested and learning about React Native. I enjoy reading and running on my spare time.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About