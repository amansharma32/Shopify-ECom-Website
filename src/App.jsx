 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'
import { createContext, useState } from 'react' 
import Dialog from '@mui/material/Dialog'; 
import DialogContent from '@mui/material/DialogContent'; 
import Productzoom from './components/ProductZoom'
import ProductModalDetails from './components/ProductModalDetails'
import Login from './Pages/Login'

const MyContext = createContext();

function App() {

   const [openProductDetails, setOpenProductDetails] = useState(false);

  const [maxWidth, setMaxWidth] = useState('lg');
  const [fullWidth, setFullWidth] = useState(true);


  
  const handleopenProductDetails = () => {
    setOpenProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setOpenProductDetails(false);
  };

  const values = {
handleopenProductDetails
  }
 
  return (
    <>
      <BrowserRouter >

<MyContext.Provider value={values}>

<Header/>
<Routes>

<Route path={"/"} exact={true} element={<Home/>} />
<Route path={"/product-listing"} exact={true} element={<ProductListing/>} />
<Route path={"/product-details/:id"} exact={true} element={<ProductDetails/>} />
<Route path={"/login"} exact={true} element={<Login/>} />

</Routes>
<Footer/>

</MyContext.Provider>
      </BrowserRouter>


         {/* <Dialog
          fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetails}
        onClose={handleCloseProductDetails}       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'

>
        
        <DialogContent>

           <div className="flex w-full items-center justify-evenly  productDetailsModalContainer">
<div className="col1 w-[50%]">
  <Productzoom/>
</div>

<div className="col1 w-[40%]">
  <ProductModalDetails/>
</div>
 
           </div>
        </DialogContent>


      
      </Dialog> */}

    </>
  )
}

export default App
export {MyContext}
