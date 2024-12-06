import React from "react";
import globe from "../../pictures/world.png";

export default function About() {
  return (
    <>
      <div className="w-100 bg-light d-flex flex-column justify-content-center align-items-center">
        <img src={globe} alt="world" height={250} />
        <h1
          className="text-dark anton header-text mt-3"
          style={{ fontSize: "4em" }}
        >
          As of today there are 195 countries in the world.
        </h1>
      </div>
    </>
  );
}
