import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogItem() {
  return (
    <>

    <div className=" blogItem group py-5">
 <div className="imgWrapper h-fit w-full cursor-pointer relative">
        <img src="https://api.spicezgold.com/download/file_1734772957778_chuwi-intel-celeron-quad-core-12th-gen-n100-8-gb-256-gb-ssd-windows-11-home-gemibook-x_pro-laptop-product-images-orvpfs1q2ov-p607679625-1-202402020000.webp" alt=""  className=' w-full h-full rounded-md  object-center object-contain transition-all group-hover:scale-105' />

        <span className=' flex items-center justify-center text-white'></span>
    </div>


    <div className="info pt-2">
        <h2 className=' font-bold'>
Date : 12/2/29
        </h2>

<p className=' text-justify text-gray-400'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa, quibusdam quae nesciunt exercitationem voluptatum fuga nulla, animi magni cumque blanditiis harum. Quasi eos similique fuga, numquam, 
</p>
<Link to="/" className='link text-gray-700' >Read More</Link>

    </div>
    </div>
   
    </>
  )
}
