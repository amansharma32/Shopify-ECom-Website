import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { IoMdClose } from "react-icons/io";
 

import React, { useState } from "react";
 
import CategoryStreching from "../../CategoryStreching";

export default function CategoryPanel(props) {

  const [open, setOpen] = React.useState(false);

   

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    props.setIsopen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation"  >
      <h2 className=" text-2xl  justify-between items-center text-[20px] flex flex-row p-3 text-gray-500">
        Shop By Categories{" "}
        <IoMdClose onClick={toggleDrawer(false)} className=" cursor-pointer" />
      </h2>
      <Divider />

     <CategoryStreching/>
     
    </Box>
  );

  return (
    <>
      <Drawer open={props.isopen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
