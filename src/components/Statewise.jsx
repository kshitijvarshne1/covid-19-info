import React, { useEffect } from "react";

export const Statewise = () => {
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const acctualData = await res.json();
    console.log(acctualData);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>INDIA COVID-19 DASHBOARD</h1>
    </>
  );
};
export default Statewise;
