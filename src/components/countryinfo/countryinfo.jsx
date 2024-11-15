import React, { useEffect, useState } from "react";
import world from "../../pictures/map2.png";
import Table from "react-bootstrap/Table";
import axios from "axios";

function CountryInfo(props) {
  const { data } = props;
  const [flag, setFlag] = useState(null);

  const loadFlag = async () => {
    let country = "";
    if (data.country) {
      if (data.country == "Phillippines") {
        country = "Philippines";
      } else {
        country = data.country;
      }

      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => {
          setFlag(res.data[0]?.flags?.svg || response.data[0]?.flags?.png);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    loadFlag();
  }, [data]);
  return (
    <>
      {data ? (
        <div className="bg-light p-2 text-dark poppins fs-3  text-capitalize">
          {data.country && (
            <h1 className="m-0 mb-3 text-center " style={{ fontSize: "2em" }}>
              {data.country}{" "}
              {flag ? (
                <img
                  className="p-0 m-0 shadow-lg"
                  src={flag}
                  alt={`${data.country} flag`}
                  width="100"
                />
              ) : (
                <>
                  <p className="placeholder-glow w-100 m-0">
                    <span
                      className="placeholder col-12"
                      style={{ height: "8vh" }}
                    ></span>
                  </p>
                </>
              )}
            </h1>
          )}
          <Table
            striped
            bordered
            hover
            size="sm"
            className="text-start fs-3 shadow-lg"
          >
            <tbody>
              {data["country abbreviation"] && (
                <tr>
                  <td className="weight">Country Abbreviation</td>
                  <td>{data["country abbreviation"]}</td>
                </tr>
              )}
              {data["post code"] && (
                <tr>
                  <td className="weight">Post Code</td>
                  <td>{data["post code"]}</td>
                </tr>
              )}
              {data.places[0].state && (
                <tr>
                  <td className="weight">State</td>
                  <td>{data.places[0].state}</td>
                </tr>
              )}
              {data.places[0]["state abbreviation"] && (
                <tr>
                  <td className="weight">State Abbreviation</td>
                  <td>{data.places[0]["state abbreviation"]}</td>
                </tr>
              )}
              {data.places[0]["place name"] && (
                <tr>
                  <td className="weight">Place Name</td>
                  <td>{data.places[0]["place name"]}</td>
                </tr>
              )}
              {data.places[0].longitude && (
                <tr>
                  <td className="weight">Longitude</td>
                  <td>{data.places[0].longitude}</td>
                </tr>
              )}
              {data.places[0].latitude && (
                <tr>
                  <td className="weight">Latitude</td>
                  <td>{data.places[0].latitude}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      ) : (
        <img className="mt-4" src={world} alt="" style={{ height: "25em" }} />
      )}
    </>
  );
}

<style scoped></style>;

export default CountryInfo;
