import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Aplikasi Monitoring Peralatan Pembangkit PT. PLN (Persero) Sektor Keramasan Palembang.',
        github: 'http://github.com/mhdiqbal19',
        demo: '#'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Aplikasi Monitoring Berkas Notaris Wahyu Analista (Sukoharjo).',
        github: 'http://github.com/mhdiqbal19',
        demo: '#'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Sistem Informasi Penggajian PT. SInergi Visi Utama.',
        github: 'http://github.com/',
        demo: '#/'
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio