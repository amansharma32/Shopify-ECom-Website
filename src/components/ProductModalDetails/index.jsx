import React, {useState} from "react";
import QtyBox from "../../components/QtyBox";
import { IoIosCart } from "react-icons/io";
import Button from "@mui/material/Button";

import Rating from "@mui/material/Rating";
export default function ProductModalDetails() {


    const [sizeActionButton, setSizeActionButton] = useState(null)

  return (
    <>
      <h1>Men Opaque Casual Shirt</h1>

            <div className="flex  items-center gap-3">
              <p>Brands: CLAFOUTIS</p>
              <p>
                {" "}
                <Rating
                  className=" pr-5 "
                  name="half-rating"
                  size="small"
                  defaultValue={2.5}
                  precision={0.5}
                  
                />
                <span>Review (5)</span>
              </p>
            </div>

            <div className="price gap-2 py-2 flex items-center">
              <span className="oldprice line-through text-gray-500">₹3000</span>
              <span className="newprice text-orange-500 font-bold">₹2000</span>

              <span>
                Available In Stock : <strong> 4634 Items</strong>
              </span>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            
            <div className="flex items-center  py-4 gap-3">
              <span className=" text-md ">Size: </span>

              <div className="flex items-center gap-3">
                <Button className={`${sizeActionButton === 0 ? '!bg-orange-500 !text-white' : '' } !min-w-[40px] `} onClick={()=>{setSizeActionButton(0)}} >
                  S
                </Button>

                <Button className={`${sizeActionButton === 1 ? '!bg-orange-500 !text-white' : '' } !min-w-[40px] `} onClick={()=>{setSizeActionButton(1)}} >
                  M
                </Button>

                <Button className={`${sizeActionButton === 2 ? '!bg-orange-500 !text-white' : '' } !min-w-[40px] `} onClick={()=>{setSizeActionButton(2)}} >
                  L
                </Button>
                <Button className={`${sizeActionButton === 3 ? '!bg-orange-500 !text-white' : '' } !min-w-[40px] `} onClick={()=>{setSizeActionButton(3)}} >
                  XL
                </Button>
              </div>

             

            </div>
<p>
  Free Shipping (Est. Delivery Time 2-3 Days)


</p>
             <div className="flex pb-3 qtyboxwrapper items-center pt-4">
<QtyBox/>
              </div>

               <Button className=' !bg-orange-500 !text-white'>
     <IoIosCart className=" text-xl mx-2"/> Add to Cart
    </Button>



    
    </>
  )
}
