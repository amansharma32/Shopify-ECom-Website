import React, {useState} from "react";

import Productzoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox";
import { IoIosCart } from "react-icons/io";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function ProductDetails() {

const [sizeActionButton, setSizeActionButton] = useState(null)
const [setactivetab, setSetactivetab] = useState(0)



  return (
    <>
      <div className="section py-5 ">
      

        <div className="container-fluid p-4  bg-white flex gap-3">
          <div className="productZoomContainer w-[40%] overflow-hidden">
            <Productzoom />
          </div>

          <div className="productdetailContainer w-[60%] overflow-hidden">
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




          </div>



        </div>

        <div className="container pt-7">
   <div className="flex items-center gap-3 text-xl" > 
   <span className={`${setactivetab === 0 ?" text-orange-500" : " "} cursor-pointer`} onClick={()=>setSetactivetab(0)}> Description</span>
   <span className={`${setactivetab === 1 ?" text-orange-500" : " "} cursor-pointer`} onClick={()=>setSetactivetab(1)}> Product Details</span>
   <span className={`${setactivetab === 2 ?" text-orange-500" : " "} cursor-pointer`} onClick={()=>setSetactivetab(2)}> Reviews (23)</span>
   </div>

 { setactivetab === 0 && (
  <div className="shadow-md w-full
    p-5">

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

    </p>
    <h4>
      vvdfvfv
    </h4>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

    </p>
    <h4>
      vvdfvfv
    </h4>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

    </p>
    <h4>
      vvdfvfv
    </h4>

   </div>
 ) }

 { setactivetab === 1 && (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 ) }

 { setactivetab === 2 && (
  <div className="shadow-md productreviewcontainer w-full
    p-5">
    <h2></h2>
 

   </div>
 ) }



</div>
      </div>
    </>
  );
}
