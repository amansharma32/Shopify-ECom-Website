import { Link } from "react-router-dom";
import Search from "../Search";

 import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaCartShopping } from "react-icons/fa6";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { useContext } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header() {


   const cartButton = useContext(MyContext)

  return (

    <>
    
    <div className="top-strip border-b-[1px]  border-gray-300">

<div className="container-fluid ">


    <div className="flex   items-center justify-between">
    <div className=" px-12 py-2 col-1 w-[50%]">
        <p className="text-[14px]  font-[500]"> Free Shipping Over $100 & Free Returns </p>
    </div>

    <div className=" px-12 py-2   col-2 justify-end  w-[50%]  flex">
  
  <ul className=" flex flex-row items-center gap-3 py-3">
    <li className=" list-none">

        <Link   className="text-[14px] font-[500] " to="/"> Help Center </Link>      
    </li>
    <li className=" list-none">

        <Link   className="text-[14px] font-[500] " to="/"> Order Tracking </Link>      
    </li>

  </ul>
   </div>
    </div> 


</div>

    </div>


    <div className="header py-3 border-b-[1px] mx-auto flex justify-center   border-gray-300">
<div className="container flex  items-center   "> 

<div className="col1 w-[30%]">
    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
</div>

<div className="col2 w-[40%]">
<Search/>
</div>

<div className="col3 w-[30%] flex items-center">
 <ul className=" flex flex-row gap-3 items-center w-full justify-end">
  <li className=" list-none pl-7 text-md">
    <Link to="/login" className=" link transition">
      Sign In
    </Link> &nbsp; |  &nbsp; <Link to="/register" className=" link transition ">
      Register
    </Link>
  </li>

  <li>
   <Tooltip title="Cart">

  
       <IconButton onClick={()=>cartButton.setopenCartPanel(true)} aria-label="cart">
      <StyledBadge badgeContent={2} color="warning">
        <FaCartShopping />
      </StyledBadge>
    </IconButton>

     </Tooltip>

  </li>
  <li>

   <Tooltip title="Compare">
   <IconButton aria-label="cart">
      <StyledBadge badgeContent={2} color="warning">
        <IoGitCompare />
      </StyledBadge>
    </IconButton>
   </Tooltip>

  
    

  </li>
  <li>

    <Tooltip title="Wish List">
 <IconButton aria-label="cart">
      <StyledBadge badgeContent={2} color="warning">
        <FaRegHeart />
      </StyledBadge>
    </IconButton>
   </Tooltip>

      

  </li>
 </ul>
</div>

    </div>
    </div>

    <Navigation/>

    </>

  )
}
