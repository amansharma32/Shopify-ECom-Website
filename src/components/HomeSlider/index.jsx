import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>


<div className="homeSlider  overflow-hidden  flex justify-center">
  <div className="container">

       <Swiper  
       loop={true}
        spaceBetween={30} 
       navigation={true}
           autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     modules={[Autoplay,Navigation]}
        className="mySwiper sliderHome">
        <SwiperSlide>

<img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="" className=' w-full object-center object-contain' />

        </SwiperSlide>
        <SwiperSlide>
        
<img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" className=' w-full object-center object-contain' alt="" />
        </SwiperSlide>

        <SwiperSlide>
        
<img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className=' w-full object-center object-contain' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        
<img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" className=' w-full object-center object-contain' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        
<img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" className=' w-full object-center object-contain' alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
        
<img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" className=' w-full object-center object-contain' alt="" />
        </SwiperSlide>
       
      </Swiper>
      
  </div>
</div>
  
    
    </>
  )
}
