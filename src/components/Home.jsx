import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import StateList from "./StateList";

const url = "https://api.covid19india.org/data.json";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [states, setStates] = useState("Total");
  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data.statewise);
    } catch (error) {
      setError(true);
    }
  };

  
  

  const updateFilter = (m) => {
    setFiltered(data.filter((d) => d.state === m));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateFilter(states);
  }, [data]);

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <InfoCard title="Confirmed" states={filtered} />
            <InfoCard title="Active" states={filtered} />
            <InfoCard title="Recovered" states={filtered} />
            <InfoCard title="Deceased" states={filtered} />
          </div>
        </div>
        <div className="col-lg-3">
          <StateList states={data} updateFilter={updateFilter} />
        </div>
      </div>
    </>
  );
};

export default Home;
