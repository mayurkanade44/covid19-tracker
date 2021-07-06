import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import StateList from "./StateList";
import Chart from "./Chart";

const url = "https://api.covid19india.org/data.json";

const Home = () => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState("Total");
  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");
  const [sort, setSort] = useState([]);
  const [graph, setGraph] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data.statewise);
      setSort(data.statewise.sort((a, b) => b.active - a.active));
      setGraph(data.cases_time_series);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = (e) => {
    setText(e.target.value);
  };

  const updateFilter = (m) => {
    setStates(m)
    setFiltered(data.filter((d) => d.state === m));
  };


  const search = () => {
    let temp = [...data];
    if (text) {
      temp = temp.filter((t) => {
        return t.state.toLowerCase().startsWith(text);
      });
    }
    return setSort(temp);
  };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, [text]);

  useEffect(() => {
    updateFilter(states);
    // eslint-disable-next-line
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
          <Chart graph={graph} states={states} filtered={filtered} />
        </div>
        <div className="col-xl-3">
          <StateList
            states={sort}
            updateFilter={updateFilter}
            text={text}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
