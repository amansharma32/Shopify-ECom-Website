import React, { useState } from 'react'
import SideBar from '../../components/Sidebar'
import ProductItems from '../../components/ProductItem';
import ProductItemListView from '../../components/ProductItemListView';
import Button from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function ProductListing() {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const [itemView, setItemView] = useState("grid")

  return (

    <>

    <section className=' flex justify-center  relative z-50'>
        <div className="container py-8 flex  gap-3">
            <div className="sidebarwrapper w-[20%] h-full bg-white p-3">
              <SideBar/>
            </div>
            <div className="rightcontent w-[80%] h-full bg-white p-3">
               


<div className="card w-full bg-gray-50 p-2 mb-2 rounded-sm flex items-center justify-between">


<div className="col1 flex items-center justify-center gap-2 itemViewAction">
<Button className={`!w-[50px]  !h-[50px]  !min-w-[40px] rounded-full ${itemView === "list" && 'active' }`} >
<FiMenu className='text-xl' onClick={()=> setItemView("list") }/>
</Button>


<Button className={`!w-[50px]  !h-[50px]  !min-w-[40px] rounded-full ${itemView === "grid" && 'active' }`} >
<IoGridSharp className='text-xl' onClick={()=> setItemView("grid") } />
</Button>

<span> there are 34 products</span>
</div>

<div className="col2 flex ml-auto items-center justify-end gap-2">
<span className=' font-semibold'>Sort By</span>


  <Button

        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className=' !bg-white !text-black'
      >
        Name, A to Z 

      </Button>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >

        <MenuItem onClick={handleClose}>A TO Z</MenuItem>
        <MenuItem onClick={handleClose}> Z TO A</MenuItem>
        <MenuItem onClick={handleClose}>Price to low to high</MenuItem>
        <MenuItem onClick={handleClose}>Price to high to low </MenuItem>
      </Menu>
      
</div>

</div>

               <div className={`grid ${itemView === 'grid' ? ' grid-cols-4  md:grid-cols-4' : ' grid-cols-1  md:grid-cols-1'} gap-2`}  >

{  itemView === "grid" ? <>

<ProductItems/>
<ProductItems/>
<ProductItems/>
<ProductItems/>
<ProductItems/>
<ProductItems/>
</>  :
 <>  
<ProductItemListView/>
<ProductItemListView/>
<ProductItemListView/>
<ProductItemListView/>
<ProductItemListView/>
<ProductItemListView/>
</>

}



               </div>

           <div className="flex justify-center items-center py-5">
                 <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton /> 
    </Stack>
           </div>
            </div>
        </div>


        
    </section>
    </>

  ) 
}
