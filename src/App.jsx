import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import { createContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Productzoom from "./components/ProductZoom";
import ProductModalDetails from "./components/ProductModalDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import CartPanelData from "./components/CartPanelData";

const MyContext = createContext();

function App() {
  const [openProductDetails, setOpenProductDetails] = useState(false);

  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);

  const [openCartPanel, setopenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setopenCartPanel(newOpen);
  };

  const handleopenProductDetails = () => {
    setOpenProductDetails(true);
  };

  const handleCloseProductDetails = () => {
    setOpenProductDetails(false);
  };

  const values = {
    handleopenProductDetails,
    setopenCartPanel,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/product-listing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product-details/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <div className="container">
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openProductDetails}
          onClose={handleCloseProductDetails}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="productDetailsModal"
          disablePortal
        >
          <DialogContent>
            <div className="flex w-full items-center justify-evenly  productDetailsModalContainer">
              <div className="col1 w-[50%]">
                <Productzoom />
              </div>

              <div className="col1 w-[40%]">
                <ProductModalDetails />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Cart panel */}

      <Drawer
        anchor="right"
        open={openCartPanel}
        onClose={toggleCartPanel(false)}
        className=" "
      >
        <div className="container flex gap-4  justify-between items-center py-4 px-4 !w-[400px] border-gray-200 border-b-[1px]">
          <p> Shopping Cart (1)</p>
          <Button onClick={toggleCartPanel(false)}>
            <IoMdClose />
          </Button>
        </div>



       <CartPanelData/>
      </Drawer>
    </>
  );
}

export default App;
export { MyContext };
