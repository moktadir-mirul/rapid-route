import React from "react";
import App from "../../App";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
