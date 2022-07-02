import React from 'react'
import "./testimonial.css"
import avt1 from '../../assets/default.png'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'
import avt4 from '../../assets/avatar4.jpg'

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: avt1,
        name: 'Nowela',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Bagaw Kusuma',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Qtizananto',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Wiwin',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    }
];


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className='testimonial'>
                                <div className='client_avatar'>
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials