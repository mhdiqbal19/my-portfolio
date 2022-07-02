import React from 'react'
import "./services.css"
import { HiCheck } from 'react-icons/hi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Figma Design</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Photoshop</p>
                        </li>
                    </ul>
                </article>
                {/* END UI/UX*/}

                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Company Profile (web/mobile)</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Sistem Aplikasi Perkantoran/Perusahaan</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Sistem Pendukung Keputusan</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>E-commerce/Toko Online (web/mobile)</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>SEO Website</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Costum Dll</p>
                        </li>
                    </ul>
                </article>
                {/* END WEB DEVELOPMENT */}

                <article className='service'>
                    <div className="service__head">
                        <h3>Content Creator</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Grafik Design</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Editor Video</p>
                        </li>
                        <li>
                            <HiCheck className='service__list-icon' />
                            <p>Potografer</p>
                        </li>
                    </ul>
                </article>
                {/* END CONTENT CREATOR */}
            </div>
        </section>
    )
}

export default Services