import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductItems from '../ProductItem';



export default function ProductSlider(props) {
  return (
    <section className='ProductSlider py-5'>
   <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true}
      
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >

        <SwiperSlide > 
    <ProductItems/>
        </SwiperSlide>   
        
       
        <SwiperSlide > 
    <ProductItems/>
        </SwiperSlide>   
        
       
        <SwiperSlide > 
    <ProductItems/>
        </SwiperSlide>   
        
       
        <SwiperSlide > 
    <ProductItems/>
        </SwiperSlide>   
        
       
        <SwiperSlide > 
    <ProductItems/>
        </SwiperSlide>   
        
       


  </Swiper>
    </section>
  )
}
