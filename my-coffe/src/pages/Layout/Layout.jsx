import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { db } from "../../db/db";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
