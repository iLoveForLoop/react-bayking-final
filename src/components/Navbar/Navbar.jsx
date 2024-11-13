import React from "react";
import "./Navbar.css";
import pic from "../../pictures/earth.png";

function Navbar() {
  return (
    <>
      <div className="bg-dark d-flex align-items-center justify-content-start py-4 px-4 gap-2">
        <h1 className="text-light m-0 size anton">Hello World</h1>
        <img src={pic} alt="World" style={{ height: "2.5em" }} />
      </div>
    </>
  );
}

export default Navbar;
