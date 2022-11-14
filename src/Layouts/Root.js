import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer/Footer";

import Header from "../shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
