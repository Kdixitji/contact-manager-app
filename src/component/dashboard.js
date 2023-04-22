import React from "react";
import LineGraph from "./LineGraph";
import Map from "./Map";
import "../component/dashboardStyles.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="line-graph-container">
        <h2>Total Cases over Time</h2>
        <LineGraph />
      </div>
      <div className="map-container">
        <h2>COVID-19 Cases by Country</h2>
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
