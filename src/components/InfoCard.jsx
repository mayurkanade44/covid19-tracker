import React from "react";

const InfoCard = ({ title, states }) => {
  return (
    <div>
      {states.map((state) => {
        const { active, confirmed, recovered, deaths } = state;
        let clas = "card text-white bg-warning m-3";
        let count = confirmed
        if (title === "Active") {
          clas = "card text-white bg-primary m-3";
          count = active
        }
        if (title === "Recovered") {
          clas = "card text-white bg-success m-3";
          count = recovered
        }
        if (title === "Deceased") {
          clas = "card text-white bg-danger m-3";
          count = deaths
        }
        
        return (
          <div key={count} className={clas}>
            <div className="card-header text-center">{title}</div>
            <div className="card-body">
              <h4 className="card-title">{count}</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
