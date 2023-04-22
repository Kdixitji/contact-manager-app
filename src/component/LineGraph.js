import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../component/LineGraphStyles.css";

const LineGraph = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) return null;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Total cases",
        data: Object.values(data.cases),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y:{
          ticks: {
            beginAtZero: true
          }
        }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default LineGraph;
