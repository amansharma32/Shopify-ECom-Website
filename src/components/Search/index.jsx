
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

import './style.css'

export default function Search() {
  return (
    <>
     <div className="container-fluid seachBox w-full  h-[50px] bg-gray-200  p-2 rounded-sm relative">
     <input type="text" placeholder='Search for Products ...' className=' w-full h-[35px] focus:outline-none bg-inherit p-2 text-[14px] text-gray-500'  />
 <Button className=' !absolute top-[8px] right-[5px] z-10 !w-[37px]  !min-w-[37px] !h-[37px] !rounded-full !text-black'><IoSearch className=' text-[#313131] text-2xl'/></Button>
     </div>
    
    </>
  )
}
