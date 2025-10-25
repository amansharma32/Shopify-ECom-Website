 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 import 'swiper/css/navigation';

// import required modules
import {  Navigation } from 'swiper/modules';



export default function HomeCatSlider() {
  return (
    <>
    <div className="  flex justify-center py-3">
      <div className="container">


  <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
      
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   
        
        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   

        <SwiperSlide > 

      <Link to="/" >
          <div className="item p-3 flex-col  !bg-[white]  items-center flex shadow-md rounded-md">
<img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" alt="" />

        <h3>
          Smart Shoes
        </h3>
        </div>
      </Link>

        
        </SwiperSlide>   


  </Swiper>

      </div>
    </div>



    </>
  )
}
