import React, { useEffect, useState } from "react";
import "./stateWise.css";

export const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const acctualData = await res.json();
    console.log(acctualData.statewise);
    setData(acctualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5">
            <span className="font-weight-bold">INDIA </span> COVID-19 DASHBAORD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="theadDark">
              <tr>
                <th>STATE</th>
                <th>CONFIRMED</th>
                <th>RECOVERED</th>
                <th>DEATHS</th>
                <th>ACTIVE</th>
                <th>UPDATED</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, ind) => {
                return (
                  <tr>
                    <th>{curElement.state}</th>
                    <td>{curElement.confirmed}</td>
                    <td>{curElement.recovered}</td>
                    <td>{curElement.deaths}</td>
                    <td>{curElement.active}</td>
                    <td>{curElement.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Statewise;
