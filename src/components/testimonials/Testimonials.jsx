import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, possimus? Odit, recusandae cupiditate voluptas enim aspernatur eveniet molestias alias laudantium consectetur. Voluptas veniam dolores optio? Praesentium corporis molestiae adipisci culpa.'
  },
  {
    avatar:AVTR2,
    name:'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, possimus? Odit, recusandae cupiditate voluptas enim aspernatur eveniet molestias alias laudantium consectetur. Voluptas veniam dolores optio? Praesentium corporis molestiae adipisci culpa.'
  },
  {
    avatar:AVTR3,
    name:'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, possimus? Odit, recusandae cupiditate voluptas enim aspernatur eveniet molestias alias laudantium consectetur. Voluptas veniam dolores optio? Praesentium corporis molestiae adipisci culpa.'
  },
  {
    avatar:AVTR4,
    name:'Kwama Despite',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, possimus? Odit, recusandae cupiditate voluptas enim aspernatur eveniet molestias alias laudantium consectetur. Voluptas veniam dolores optio? Praesentium corporis molestiae adipisci culpa.'
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
      modules={[Autoplay,Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 3200,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="" />
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

