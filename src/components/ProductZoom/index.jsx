 
import ImageZoom from "react-image-zooom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



export default function Productzoom() {

  const [slideIndex, setslideIndex] = useState(0);

  const smallslider =   useRef();
  const bigslider =   useRef();



  function goto(index) {

    setslideIndex(index);
    smallslider.current.swiper.slideTo(index);
    bigslider.current.swiper.slideTo(index);
    
  }

  return (

    <>
    
  
    
   <div className="container flex gap-3">

<div className="sliders w-[20%]">
   <Swiper

   ref={smallslider}
   slidesPerView={4}
   
navigation={true}
        direction={'vertical'}
        
        modules={[Pagination , Navigation]}
        className="zoomproductthumbsslider h-[500px] overflow-hidden"
      >
        <SwiperSlide >

          <div className="item" onClick={()=> goto(0)}>
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="item" onClick={()=> goto(1)}>
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="item" onClick={()=> goto(2)}>
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="item" onClick={()=> goto(3)}> 
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="item" onClick={()=> goto(4)}>
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="item" onClick={()=> goto(5)}>
            <img src="https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp" alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
</div>
 

<div className="zoomcontainer w-[80%] h-[500px] overflow-hidden">



  <Swiper
  ref={bigslider}
   slidesPerView={1}
   
navigation={true}
        
       >
        <SwiperSlide>

          <ImageZoom 
        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
        alt="A image to apply the ImageZoom plugin" 
        fullWidth={true} 
      /> 
        </SwiperSlide>
        <SwiperSlide>

          <ImageZoom 
        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
        alt="A image to apply the ImageZoom plugin" 
        fullWidth={true} 
      /> 
        </SwiperSlide>
        <SwiperSlide>

          <ImageZoom 
        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
        alt="A image to apply the ImageZoom plugin" 
        fullWidth={true} 
      /> 
        </SwiperSlide>
        <SwiperSlide>

          <ImageZoom 
        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
        alt="A image to apply the ImageZoom plugin" 
        fullWidth={true} 
      /> 
        </SwiperSlide>
     
        
      </Swiper>


  
</div>
   </div>
         

    </>
  )
}
 