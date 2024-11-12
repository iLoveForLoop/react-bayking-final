import axios from "axios";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import CountryInfo from "./components/countryinfo/countryinfo";
import countries from "./json/countries.json";
import { useState } from "react";

function App() {
  //style
  const style = {
    height: "100vh",
  };

  //link
  const URL = "https://api.zippopotam.us";

  //changes
  const onChange = (e) => {
    const value = e.target.value;
    const link = `${URL}/${value}`;
    console.log(link);
    load(link);
  };

  //datas
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch data
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
      <div className="bg-dark" style={style}>
        <div
          className="container pt-5 bg-light d-flex flex-column justify-content-start align-items-center"
          style={style}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-dark">Hello World</h1>
            <Dropdown
              id="countries"
              label="country"
              options={countries}
              containerClass="d-flex p-3"
              onSelectChange={onChange}
            />
          </div>

          {loading ? <p>Loading...</p> : <CountryInfo data={data} />}
        </div>
      </div>
    </>
  );
}

export default App;
