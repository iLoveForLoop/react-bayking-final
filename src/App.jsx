import axios from "axios";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import CountryInfo from "./components/countryinfo/countryinfo";
import countries from "./json/countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
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
      <div className="bg-light" style={{ height: "100vh" }}>
        {/* <Navbar /> */}
        <div className="container pt-5 bg-light d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1
              className="text-dark anton header-text"
              style={{ fontSize: "6em" }}
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
                  style={{ height: "8vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
                ></span>
              </p>
              <p className="placeholder-glow w-100 m-0">
                <span
                  className="placeholder col-12"
                  style={{ height: "6vh" }}
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

export default App;
