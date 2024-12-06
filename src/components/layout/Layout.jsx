import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="d-flex flex-column" style={{ height: "100vh" }}>
        <Navbar />
        <div className="bg-secondary d-flex flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
