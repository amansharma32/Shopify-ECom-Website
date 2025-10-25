import React, {useState} from "react";

import Productzoom from "../../components/ProductZoom";
import ProductSlider from "../../components/ProductSlider";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ProductModalDetails from "../../components/ProductModalDetails";

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

const [setactivetab, setSetactivetab] = useState(0)



  return (
    <>
      <div className="section flex justify-center flex-col items-center py-5 ">
      

        <div className="container p-4  bg-white flex gap-3">
          <div className="productZoomContainer w-[40%] overflow-hidden">
            <Productzoom />
          </div>

          <div className="productdetailContainer w-[60%] overflow-hidden">

        <ProductModalDetails/>

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
    <h2>
      Customer questions & answers

    </h2>

    <div className="reviewsScroll w-full  max-h-[300px]   overflow-y-scroll overflow-x-hidden">


    <div className="review border-b-2 border-gray-300 py-5 w-full flex items-center justify-between">
    <div className="info w-[60%] flex items-center gap-2">

<div className="imgwrapper h-[80px] w-[80px] rounded-full  overflow-hidden ">

    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className=" w-full" alt="" />
</div>

<div className=" w-[70%]">

  <h4>rinku verma</h4>
  <h5>23-2-2025</h5>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam.</p>
</div>


    </div>
<Rating/>

    </div>
    <div className="review border-b-2 border-gray-300 py-5 w-full flex items-center justify-between">
    <div className="info w-[60%] flex items-center gap-2">

<div className="imgwrapper h-[80px] w-[80px] rounded-full  overflow-hidden ">

    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className=" w-full" alt="" />
</div>

<div className=" w-[70%]">

  <h4>rinku verma</h4>
  <h5>23-2-2025</h5>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam.</p>
</div>


    </div>
<Rating/>

    </div>
    <div className="review border-b-2 border-gray-300 py-5 w-full flex items-center justify-between">
    <div className="info w-[60%] flex items-center gap-2">

<div className="imgwrapper h-[80px] w-[80px] rounded-full  overflow-hidden ">

    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className=" w-full" alt="" />
</div>

<div className=" w-[70%]">

  <h4>rinku verma</h4>
  <h5>23-2-2025</h5>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam.</p>
</div>


    </div>
<Rating/>

    </div>
    <div className="review border-b-2 border-gray-300 py-5 w-full flex items-center justify-between">
    <div className="info w-[60%] flex items-center gap-2">

<div className="imgwrapper h-[80px] w-[80px] rounded-full  overflow-hidden ">

    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className=" w-full" alt="" />
</div>

<div className=" w-[70%]">

  <h4>rinku verma</h4>
  <h5>23-2-2025</h5>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam.</p>
</div>


    </div>
<Rating/>

    </div>


    </div>
 
 <br />

 <div className="reviewform">
  <h2>Add a review
</h2>


  <form action="" className=" pt-4">

     <TextField
          required
          id="outlined-required"
          label="Write a Review"
          className=" w-full"
          multiline
          rows={4}
          defaultValue=" "
        />
<br /><br />
        <Rating/>

        <div className="flex py-4">
          <Button className=" !bg-orange-500 !text-white !capitalize !text-sm !p-4 !rounded-full">
            Submit Review
          </Button>
        </div>

  </form>

 </div>

   </div>
 ) }

<div className="container pt-4">
  <section className=" bg-white  container  py-5">
  
  <div className="flex items-center justify-between">
  
  <div className=" mx-12 leftsec">
    <h3 className=" text-md uppercase">
     Related products
  
    </h3>
    <p className=" text-sm text-gray-400">
     Do not miss the current offers until the end of March.
  
  
  
    </p>
  </div>
  
  
   
  </div>
  
  <ProductSlider  items={4} />
  
  </section>
</div>

</div>
      </div>
    </>
  );
}
