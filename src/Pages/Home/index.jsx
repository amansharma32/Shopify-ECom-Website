import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
 import * as React from 'react';
import ProductSlider from "../../components/ProductSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import BlogItem from "../../components/BlogItem";






export default function Home() {

   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
  <div className="flex justify-center flex-col items-center">

      <HomeSlider  />
    <HomeCatSlider/>

<section className=" bg-white  container  py-5">

<div className="flex items-center justify-between">

<div className="mx-12  leftsec">
  <h3 className="text-md uppercase">
    Popular Products
  </h3>
  <p className="text-sm text-gray-400">
    Do not miss the current offers until the end of March.


  </p>
</div>


<div className="rightsec">
 <Box sx={{ maxWidth: { xs: 320, sm: 680 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="
Bags" />
        <Tab label="
Footwear" />
        <Tab label="
Groceries" />
        <Tab label="
Beauty" />
        <Tab label="
Wellness" />
      </Tabs>
    </Box>
</div>
</div>

<ProductSlider  items={4} />

</section>



<section className=" bg-white  container  py-5">

<div className="flex items-center justify-between">

<div className=" mx-12 leftsec">
  <h3 className=" text-md uppercase">
   featured products

  </h3>
  <p className=" text-sm text-gray-400">
   Do not miss the current offers until the end of March.



  </p>
</div>


 
</div>

<ProductSlider  items={4} />

</section>



<section className=" bg-white  container  py-5">

<div className="flex items-center justify-between">

<div className=" mx-12 leftsec">
  <h3 className=" text-md uppercase">
   featured Blogs

  </h3>
  <p className=" text-sm text-gray-400">
   Do not miss the current offers until the end of March.



  </p>
</div>


 
</div>

<div className="container">
  <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
      
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="blogslider"
      >

        <SwiperSlide > 
    <BlogItem/>
        </SwiperSlide>   
         
        <SwiperSlide > 
    <BlogItem/>
        </SwiperSlide>   
         
        <SwiperSlide > 
    <BlogItem/>
        </SwiperSlide>   
         
        <SwiperSlide > 
    <BlogItem/>
        </SwiperSlide>   
         
        <SwiperSlide > 
    <BlogItem/>
        </SwiperSlide>   
         


  </Swiper>

</div>

</section>




  </div>

    </>
  )
}
