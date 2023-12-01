import React from "react";
import Nav from "../components/navMenu/navBar/Nav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className=" max-w-screen min-h-screen flex flex-col overflow-x-hidden">
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
