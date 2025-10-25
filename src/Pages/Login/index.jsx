import React from 'react'
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <>
    
    <div className="section relative z-30">
        <div className="container">
            <div className=" px-10 card shadow-md w-[500px]  m-auto rounded-md bg-white p-4">
<h3 className=' text-center'>
    Login to Your Account
</h3>


<form action="" className=' mt-6'>
<div className="form-group mb-5">
     <TextField
          required
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
          required
         variant="outlined"
          className=' w-full'
          id="password"
          label="Password"
          placeholder='Enter Password'
          
        /> 
        
</div>


</form>
            </div>
        </div>
    </div>


    </>
  )
}
