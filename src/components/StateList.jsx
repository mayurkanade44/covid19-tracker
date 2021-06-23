import React from "react";

const StateList = ({ states, updateFilter, text, onUpdate }) => {
  return (
    <>
      <div className="mt-3">
        <h5>Active Cases by States</h5>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            className="form-control bg-light  my-3"
            style={{ color: "whitesmoke" }}
            value={text}
            onChange={onUpdate}
          ></input>
        </form>
      </div>
      <div className="table mt-2">
        {text
          ? states.map((d) => {
              return (
                <div
                  key={d.confirmed}
                  className="d-flex justify-content-between p-2 tb"
                  onClick={() => updateFilter(d.state)}
                >
                  <div>{d.state.substring(0, 22)}</div>
                  <div>{d.active}</div>
                </div>
              );
            })
          : states.slice(1).map((d) => {
              return (
                <div
                  key={d.confirmed}
                  className="d-flex justify-content-between p-2 tb"
                  onClick={() => updateFilter(d.state)}
                >
                  <div>{d.state.substring(0, 22)}</div>
                  <div>{d.active}</div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default StateList;
