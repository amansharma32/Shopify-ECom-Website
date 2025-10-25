import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";

import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function ProductItemListView() {
  return (
    <>
<div className="productitem  flex items-center   shadow-lg ">
    <div className=" group imgwrapper w-[40%]   overflow-hidden relative">
    <Link to="/">

 <div className="img h-[250px] overflow-hidden" >
      <img
         src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
          className=' w-full h-full object-center object-contain' alt="" />
      <img
         src="https://api.spicezgold.com/download/file_1734774941574_e6mcHGzb_51e00e276f0744eebaf91c9a7b2b15aa.jpg"
          className=' w-full h-full absolute top-0 transition-all duration-500  left-0 opacity-0 group-hover:opacity-100 object-center object-contain' alt="" />

 </div>

    </Link>
     

          <span className=' text-sm p-1 discount flex items-center absolute top-2  left-2 z-20 bg-orange-500 text-white rounded-md'>

            10% off
          </span>

          <div className="actions  absolute  top-[-200px] right-2 z-20 flex items-center gap-2 flex-col  transition-all duration-500 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
            <Button className=' !w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full !bg-black hover:!bg-orange-500 hover:!text-white group'>
<MdOutlineZoomOutMap className=' text-[18px]  group-hover:text-white'/>
            </Button>

            <Button className=' !w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full !bg-black hover:!bg-orange-500 hover:!text-white group'>
<IoGitCompareOutline className=' text-[18px]  group-hover:text-white'/>
            </Button>

            <Button className=' !w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full !bg-black hover:!bg-orange-500 hover:!text-white group'>
<FaRegHeart className=' text-[18px]  group-hover:text-white'/>
            </Button>
          </div>

    </div>

    <div className="info bg-gray-50 p-3">
        <h6><Link className='link text-sm' to="/">
            RARE RABBIT
        </Link></h6>
        <h3>Men Alias-N Regular Fit Spread Collar Shirt</h3>
<p>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eligendi veniam incidunt vel tenetur, facilis nostrum fugit sed omnis assumenda?
</p>
        <Stack spacing={1}>
    <Rating name="size-small" readOnly defaultValue={2} size="small" /> </Stack>

    <div className="price  py-2  gap-2 flex items-center">
        <span className='oldprice line-through text-gray-500'>₹3000</span>
        <span className='newprice text-orange-500 font-bold'>₹2000</span>
    </div>

    <Button className=' !bg-orange-500 !text-white'>
     <IoCartOutline className='text-xl mx-2'/> Add to Cart
    </Button>

    </div>

</div>
    </>
  )
}
