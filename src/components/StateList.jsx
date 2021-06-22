import React, { useEffect, useState } from "react";

const StateList = ({ states, updateFilter }) => {
  return (
    <>
      <div className="mt-3">
        <h5>Active Cases by States</h5>
        <input
          type="text"
          placeholder="Search"
          className="form-control bg-light  my-3"
          style={{ color: "whitesmoke" }}
        ></input>
      </div>

      <div className="table mt-2">
        {states.slice(1).map((d) => {
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
