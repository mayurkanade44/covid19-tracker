import { Line, Bar } from "react-chartjs-2";
const Chart = ({ graph, states, filtered }) => {
  const line = (
    <Line
      data={{
        labels: graph.map((date) => date.dateymd),

        datasets: [
          {
            data: graph.map((data) => data.totalconfirmed),
            label: "Confirmed",
            borderColor: "orange",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
          {
            data: graph.map((data) => data.totalrecovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
          {
            data: graph.map((data) => data.totaldeceased),
            label: "Deceased",
            borderColor: "red",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
          {
            data: graph.map(
              (data) => data.totalconfirmed - data.totalrecovered
            ),
            label: "Active",
            borderColor: "blue",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      }}
    />
  );

  const bar = filtered.map((d) => {
    return (
      <Bar
        key={d.confirmed}
        data={{
          labels: ["Confirmed", "Active", "Recovered", "Deaths"],
          datasets: [
            {
              label: d.state,
              backgroundColor: ["#f80", "#2a9fd6", "#77b300", "#c00"],
              data: [d.confirmed, d.active, d.recovered, d.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true },
        }}
      />
    );
  });

  return (
    <div className="container mt-2" style={{ width: 935 }}>
      {states === "Total" ? line : bar}
    </div>
  );
};

export default Chart;
