import React from "react";
import "./Navbar.css";
import pic from "../../pictures/earth.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-dark d-flex align-items-center justify-content-between py-4 px-5 gap-2">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <h1 className="text-light m-0 size anton">Hello World</h1>
          <img src={pic} alt="World" style={{ height: "2.5em" }} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <ul className="p-0 m-0 d-flex gap-4 list-unstyled text-light fs-5 poppins ">
            <li>
              <Link className="text-decoration-none text-light" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
