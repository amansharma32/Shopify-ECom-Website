import Button from '@mui/material/Button'
import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function CartPanelData() {
  return (
    <>

         <div className="flex    flex-col items-center scroll overflow-hidden max-h-[450px] overflow-y-scroll overflow-x-hidden py-4">

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>

<div className="cartItem  w-full   flex p-2 items-center border-b-[1px] border-gray-300">
<div className="img2 w-[20%] ">
<img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" className="   h-24   w-full" alt="" />
</div>

<div className="info w-[80%] ps-4 relative">
<p  >Men Opaque Casual Sh...</p>

<p>Qty : 1.  <span className=" text-orange-500"> ₹1,450.00</span></p>

<Button className=' !absolute !top-0 !right-0' > <MdOutlineDelete className=" text-2xl"/>  </Button>
</div>
 </div>



        </div>

        <div className="container flex">
<div className="col1 w-full border-t-[1px] flex-col border-gray-200 absolute bottom-0 p-4 flex items-center justify-between">
  <div className="con1 flex items-center justify-between p-4 w-full">
  <p>1 item</p>
    <p>₹1,450.00</p>
  </div>
  <div className="con1 flex items-center border-t-[1px] border-gray-200 p-4 justify-between w-full">
  <p>Shipping</p>
    <p>₹1,450.00</p>
  </div>
  <div className="con1 flex items-center border-t-[1px] border-gray-200 p-4 justify-between w-full">
  <p>Total (tax exc.)</p>
    <p>₹2,450.00</p>
  </div>


 <div className="row flex gap-2 flex-row w-full">

     <Button className='w-full !bg-orange-500 !text-white'>
    VIEW CART
  </Button>
  <Button className='w-full !text-orange-500 !bg-transparent !border-2  !border-orange-500'>
    CHECKOUT
  </Button>
 </div>
   
</div>
        </div>
    </>
  )
}
