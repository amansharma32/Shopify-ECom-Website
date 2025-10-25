import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

import "./style.css";

export default function Navigation() {
  const [isopen, setIsopen] = useState(false);

  function openCategoryPanel() {
    setIsopen(true);
  }

  return (
    <>
      <nav >
        <div className=" container-fluid  flex items-center justify-end py-4">
          <div className="col1 w-[20%] flex   justify-end">
            <Button className=" gap-2" onClick={openCategoryPanel}>
              <RiMenu2Fill />
              Shop By Category
              <FaAngleDown />
            </Button>
          </div>

          <div className="col2 w-[60%]">
            <ul className=" relative nav flex list-none  items-center  ">
              <li>
                <Link className=" px-4  text-[14px] font-[500]  link" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/store"
                >
                  Fashion
                </Link>

                <div className="submenu transition-all absolute min-w-[200px] bg-white shadow-md !top-[120%] opacity-0  left-[0%] ">
                  <ul className=" ">
                    <li className=" list-none flex flex-col  w-full relative">
                      <Link>
                        <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                          Men's Clothing
                        </Button>

                        <div className="submenu transition-all absolute min-w-[200px] bg-white shadow-md !top-[0%] opacity-0  left-[100%] ">
                          <ul className=" ">
                            <li className=" list-none flex flex-col  w-full">
                              <Link to="/store">
                                <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                                  Men's Clothing
                                </Button>
                              </Link>

                              <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                                Men's Clothing
                              </Button>

                              <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                                Men's Clothing
                              </Button>
                              <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                                Men's Clothing
                              </Button>
                              <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                                Men's Clothing
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <Button className=" px-4   !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                        Men's Clothing
                      </Button>
                      <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                        Men's Clothing
                      </Button>
                      <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                        Men's Clothing
                      </Button>
                      <Button className=" px-4  !justify-start  !text-left  !text-gray-700 text-[14px] font-semibold  link">
                        Men's Clothing
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link className=" px-4  text-[14px] font-[500] link" to="/blog">
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/contact"
                >
                  {" "}
                  Bags{" "}
                </Link>
              </li>

              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/about"
                >
                  {" "}
                  FootWear
                </Link>
              </li>

              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/about"
                >
                  {" "}
                  Groceries
                </Link>
              </li>

              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/about"
                >
                  {" "}
                  Wellness
                </Link>
              </li>

              <li>
                <Link
                  className=" px-4  text-[14px] font-[500] link"
                  to="/about"
                >
                  {" "}
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col2 w-[20%]">
            <ul className="  flex list-none  items-center  ">
              <li>
                <p className=" px-4  text-[14px] font-[500]  link">
                  {" "}
                  Free International Delivery
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CategoryPanel isopen={isopen} setIsopen={setIsopen} />
    </>
  );
}
