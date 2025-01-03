import React from "react";
import axios from "axios";
import Dropdown from "../dropdown/dropdown";
import CountryInfo from "../countryinfo/countryinfo";
import countries from "../../json/countries.json";
import { useState } from "react";

export default function Home() {
  const URL = "https://api.zippopotam.us";

  const onChange = (e) => {
    const value = e.target.value;

    if (value == "") {
      setData(null);
    } else {
      const link = `${URL}/${value}`;
      console.log(link);
      load(link);
    }
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = (link) => {
    setLoading(true);
    axios
      .get(link)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="bg-light w-100">
        <div className="container pt-5 bg-light d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1
              className="text-dark anton header-text"
              style={{ fontSize: "3.8em" }}
            >
              Hello World
            </h1>
            <Dropdown
              id="countries"
              label="country"
              options={countries}
              containerClass="d-flex p-3 poppins"
              onSelectChange={onChange}
            />
          </div>

          {loading ? (
            <div className="w-50 mt-3 d-flex flex-column gap-1">
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "5vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "4vh" }}
                ></span>
              </p>
            </div>
          ) : (
            <CountryInfo data={data} />
          )}
        </div>
      </div>
    </>
  );
}
