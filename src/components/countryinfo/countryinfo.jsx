import React from "react";
import world from "../../pictures/map2.png";

function CountryInfo(props) {
  const { data } = props;

  return (
    <>
      {data ? (
        <div className="d-flex flex-column bg-light p-2 text-dark poppins fs-3 text-capitalize justify-content-center align-items-start">
          <div className="">
            {data.country && (
              <h1 className="m-0" style={{ fontSize: "2em" }}>
                Country: {data.country}
              </h1>
            )}
          </div>

          <div className="d-flex flex-column justify-content-start align-items-start">
            <div>
              {data["country abbreviation"]
                ? `COUNTRY ABBREVIATION: ${data["country abbreviation"]}`
                : ""}
            </div>

            <div>{data["post code"] && `POST CODE: ${data["post code"]}`}</div>
            <div>
              {data.places[0].state ? `STATE: ${data.places[0].state}` : ""}
            </div>
            <div>
              {data.places[0]["state abbreviation"]
                ? `STATE ABBREVIATION: ${data.places[0]["state abbreviation"]}`
                : ""}
            </div>

            <div>
              {data.places[0]["place name"]
                ? `PLACE NAME: ${data.places[0]["place name"]}`
                : ""}
            </div>
            <div>
              {data.places[0].longitude
                ? `LONGITUDE: ${data.places[0].longitude}`
                : ""}
            </div>
            <div>
              {data.places[0].latitude
                ? `LATITUDE: ${data.places[0].latitude}`
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <img className="mt-4" src={world} alt="" style={{ height: "25em" }} />
      )}
    </>
  );
}

<style scoped></style>;

export default CountryInfo;
