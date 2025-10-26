import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  return (
    <>
    
    <div className="section relative z-30 py-12">
        <div className="container-fluid">
            <div className=" px-10 card shadow-md w-[400px]   m-auto rounded-md bg-white p-4">
<h3 className=' text-center'>
  Register with a new account

</h3>


<form action="" className=' mt-6'>
<div className="form-group mb-5">
     <TextField
          required
          type='text'
         variant="outlined"
          className=' w-full'
          id="name"
          label="Full Name"
          defaultValue=""
          placeholder='Enter Name'
        /> 
        
</div>

<div className="form-group mb-5">
     <TextField
          required
          type='email'
         variant="outlined"
          className=' w-full'
          id="email"
          label="Email ID"
          defaultValue=""
          placeholder='Enter Email'
        /> 
        
</div>
<div className="form-group">
     <TextField
     type='password'
          required
         variant="outlined"
          className=' w-full'
          id="password"
          label="Password"
          placeholder='Enter Password'
          
        /> 
        
</div>

<br />
 

<div className="flex  w-full items-center !pt-4">
    <Button className="  btnm w-full !bg-orange-500 !text-white">
    Register
</Button>
</div>


<p>
Already have an account? 


<Link to="/login" className=' link  cursor-pointer text-center w-full  '> Login </Link>
</p>
<p className=' text-center'>
  Or continue with social account
</p>

<Button className=' w-full !mt-4 !bg-gray-100' >
<FcGoogle className=' !text-xl mx-2'/> Register WITH GOOGLE
</Button>


</form>
            </div>
        </div>
    </div>


    </>
  )
}
