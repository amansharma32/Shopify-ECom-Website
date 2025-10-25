import Button from '@mui/material/Button'
import React , {useState} from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


export default function QtyBox() {

  const [qty, setqty] = useState(1)

   function qtyadd() {
    setqty( qty + 1);
   }

   function qtyminus() {

    if (qty === 1) {
       setqty(1);
    }
    else
     setqty( qty - 1);
   }

  return (
    <>
    
    <div className="QtyBox flex relative">
       <input aria-hidden="true"  type="number"  readOnly className=' w-[75px] h-[45px] p-2  focus:outline-none border border-gray-400 rounded-md' value={qty} />

    <div className="flex items-center flex-col justify-center h-full absolute top-0  right-0 ">
         <Button className='!min-w-[10px] h-[20px]' onClick={qtyadd} >
       <FaAngleUp/>
       </Button>

       <Button className='!min-w-[10px] h-[20px]' onClick={qtyminus}>
       <FaAngleDown/>
       </Button>
    </div>



    </div>
    </>
  )
}
