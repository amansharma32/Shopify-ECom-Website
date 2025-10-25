import Button from '@mui/material/Button'
 
import { Link } from 'react-router-dom'
import React, { useState } from "react";
 
import { AiOutlinePlusSquare } from "react-icons/ai";
 import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { IoMdClose } from "react-icons/io";
import { FiMinusSquare } from "react-icons/fi";

export default function CategoryStreching() {

      const [open, setOpen] = React.useState(false);
    
      const [subMenuIndex, setsubMenuIndex] = useState(null);
    
      const [childsubMenuIndex, setchildsubMenuIndex] = useState(null);
    
      const handleSubmeni = (index)=>{
    
        if(subMenuIndex === index){
            setsubMenuIndex(null);
        }
        else{
            setsubMenuIndex(index);
        }
      }
    
    const innerHandleSubmeni = (index)=>{
        if(childsubMenuIndex === index){
    
            setchildsubMenuIndex(null);
    
        }
        
        else{
            setchildsubMenuIndex(0);
        }
    
    }
    const innerHandleSubmet = (index)=>{
        if(childsubMenuIndex === index){
    
            setchildsubMenuIndex(null);
    
        }
        
        else{
            setchildsubMenuIndex(1);
        }
    
    }
    
      const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        props.setIsopen(newOpen);
      };
  return (
  <>
      <div className="scroll">
        <ul className=" w-full">


          <li className=" p-3 list-none   relative items-center  flex flex-col border-b-[1px] border-gray-200">
          <Link to='/' className=" w-full" >
   <Button className=" w-full !text-left !justify-start ">
            Electronics 
          </Button>
          </Link>
       
{
    subMenuIndex === 0 ? (
        
        <FiMinusSquare onClick={()=>handleSubmeni(0)} className=" absolute top-[20px] right-[15px] cursor-pointer"/>
    ) : (
        <AiOutlinePlusSquare onClick={()=>handleSubmeni(0)} className=" absolute top-[20px] right-[15px] cursor-pointer"/>
    )
}

        
       { subMenuIndex === 0 && 

   <ul className="submenu   w-full   !pl-5 ">

   
            <li className=" list-none relative ">
             <Link to='/' className=" w-full" >
 <Button className=" w-full !text-left !justify-start  ">
            Electronics 
          </Button>
             </Link>
  
          
          { childsubMenuIndex === 0 ? (
              
              <FiMinusSquare onClick={()=>innerHandleSubmeni(0)} className=" absolute top-[10px] right-[15px] cursor-pointer"/>
          ) : (     


          <AiOutlinePlusSquare onClick={()=>innerHandleSubmeni(0)} className=" absolute top-[10px] right-[15px] cursor-pointer"/>
            )       }
            

         { childsubMenuIndex === 0 &&   
           <ul className="submenu   w-full   !pl-5 ">
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
          </ul>
            }

            </li>



          


          </ul>

}

          </li>



          <li className=" p-3 list-none    relative items-center  flex flex-col border-b-[1px] border-gray-200">
          <Link to='/' className=" w-full" >
   <Button className=" w-full !text-left !justify-start ">
            Electronics 
          </Button>
          </Link>
       
{
    subMenuIndex === 1 ? (
        
        <FiMinusSquare onClick={()=>handleSubmeni(1)} className=" absolute top-[20px] right-[15px] cursor-pointer"/>
    ) : (
        <AiOutlinePlusSquare onClick={()=>handleSubmeni(1)} className=" absolute top-[20px] right-[15px] cursor-pointer"/>
    )
}

        
       { subMenuIndex === 1 && 

   <ul className="submenu   w-full   !pl-5 ">

   
            <li className=" list-none relative ">
             <Link to='/' className=" w-full" >
 <Button className=" w-full !text-left !justify-start  ">
            Electronics 
          </Button>
             </Link>
  
          
          { childsubMenuIndex === 1 ? (
              
              <FiMinusSquare onClick={()=>innerHandleSubmet(1)} className=" absolute top-[10px] right-[15px] cursor-pointer"/>
          ) : (     


          <AiOutlinePlusSquare onClick={()=>innerHandleSubmet(1)} className=" absolute top-[10px] right-[15px] cursor-pointer"/>
            )       }
            

         { childsubMenuIndex === 1 &&  

           <ul className="submenu   w-full   !pl-5 ">
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
            <li className=" list-none relative">
   <Link to="/" className=" link w-full !text-left !justify-start  ">
            Electronics 
          </Link>
          </li>
          </ul>
            }

            </li>



          


          </ul>

}

          </li>



       </ul>
      </div>
  </>
  )
}
