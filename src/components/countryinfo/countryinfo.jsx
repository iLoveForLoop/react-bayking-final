import React from "react";

function CountryInfo(props) {
  const { data } = props;

  return (
    <>
      {data ? (
        <div className="P d-flex flex-column bg-secondary p-5 text-light">
          <div>{data.country ? `Country Name: ${data.country}` : ""}</div>
          <div>
            {data["post code"] ? `POST CODE: ${data["post code"]}` : ""}
          </div>
          <div>
            {data["country abbreviation"]
              ? `COUNTRY ABBREVIATION: ${data["country abbreviation"]}`
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
          <div>
            {data.places[0].state ? `STATE: ${data.places[0].state}` : ""}
          </div>
          <div>
            {data.places[0]["state abbreviation"]
              ? `STATE ABBREVIATION: ${data.places[0]["state abbreviation"]}`
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

<style scoped></style>;

export default CountryInfo;
