import axios from "axios";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import CountryInfo from "./components/countryinfo/countryinfo";
import countries from "./json/countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Layout from "./components/layout/Layout";

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
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
