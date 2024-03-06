import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Slid from "./components/Swiper/Slid";

export default function App() {
  return (
    <>
      <Navbar1 />
      <Slid/>
      <Outlet />
      

    </>
  );
}