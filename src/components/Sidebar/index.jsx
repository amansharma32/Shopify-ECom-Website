import React, { useState } from 'react'
 import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './style.css'
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


export default function SideBar() {

    const [opencategory, setopencategory] = useState(true)
    const [opencategoryavailable, setopencategoryavailable] = useState(true)
    const [opencategorySize, setopencategorySize] = useState(true)

 

  return (
    <>
    
    <aside className='sidebar flex gap-5 flex-col '>

<div className="box">
    <h3 className=' flex items-center justify-around'>Shop by Category 
    <Button onClick={()=>setopencategory(!opencategory) }>
{

opencategory === true ?  <FaAngleUp />  : <FaAngleDown /> 

}
    </Button>

   
    
    </h3>

    <Collapse isOpened={opencategory}>
   <div className="scroll w-full">
         
      <FormControlLabel control={<Checkbox size="small"  />}  label="Fashion" className='w-full' size="small" />
      <FormControlLabel control={<Checkbox size="small" />}  label="Electronics"className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Bags" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Footwear" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Groceries" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Beauty" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Wellness" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Jewellery" className='w-full'/>
      <FormControlLabel control={<Checkbox size="small" />}  label="Circle" className='w-full'/>
     
    </div>
</Collapse>
  
</div>

<div className="box">
    <h3 className=' flex items-center justify-around'>Shop by Availability 
    <Button onClick={()=>setopencategoryavailable(!opencategoryavailable) }>
{

opencategoryavailable === true ?  <FaAngleUp />  : <FaAngleDown /> 

}
    </Button>

   
    
    </h3>

    <Collapse isOpened={opencategoryavailable}>
   <div className="scroll w-full">
         
      <FormControlLabel control={<Checkbox size="small"  />}  label="available (18)" className='w-full' size="small" />
      <FormControlLabel control={<Checkbox size="small"  />}  label="instock (14)" className='w-full' size="small" />
      <FormControlLabel control={<Checkbox size="small"  />}  label="not available (4)" className='w-full' size="small" />
     
     
    </div>
</Collapse>
  
</div>

<div className="box">
    <h3 className=' flex items-center justify-around'>Shop by Size
    <Button onClick={()=>setopencategorySize(!opencategorySize) }>
{

opencategorySize === true ?  <FaAngleUp />  : <FaAngleDown /> 

}
    </Button>

   
    
    </h3>

    <Collapse isOpened={opencategorySize}>
   <div className="scroll w-full">
         
      <FormControlLabel control={<Checkbox size="small"  />}  label="small (18)" className='w-full' size="small" />
      <FormControlLabel control={<Checkbox size="small"  />}  label="medium (14)" className='w-full' size="small" />
      <FormControlLabel control={<Checkbox size="small"  />}  label="large (4)" className='w-full' size="small" />
     
     
    </div>
</Collapse>
  
</div>


<div className="box">
    <h3 className='pb-3 '>
    
    Filter By Price
 
    </h3>

     <RangeSlider />

<div className="pricerange flex pt-3 text-[14px] ">
    <span>from : <strong>Rs: 54</strong></span>
    <span className=' ml-auto'>from : <strong>Rs: 570</strong></span>
</div>
     
    
  
</div>


<div className="box">
    <h3 className='pb-3 '>
    
    Filter By Rating
 
    </h3>
<div className="row flex flex-col">
  <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly size='small' className=' w-full ' />
    <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly size='small' className=' w-full ' />
    <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly size='small' className=' w-full '/>
    <Rating name="half-rating" defaultValue={2} precision={0.5} readOnly size='small' className=' w-full ' />
    <Rating name="half-rating" defaultValue={1} precision={0.5} readOnly size='small' className=' w-full '/>
     
</div>
  
    
  
</div>


    </aside>
    </>
  )
}
