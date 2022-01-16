import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Skill.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      min: 0,
      max: 100,
      ticks: {
        callback: function (val: any, index: any) {
          if (val === 0) {
            return "";
          } else if (val < 60) {
            return "Begain";
          } else if (val < 90) {
            return "Inter";
          } else {
            return "Exper";
          }
        },
        color: "red",
        count: 4,
      },
    },
  },
};

const labels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];
const data = {
  labels,
  datasets: [
    {
      label: "Java",
      data: labels.map((item, index) => index),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Python",
      data: labels.map((item, index) => index),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Skill = () => {
  return (
    <div className="skill">
      <div className="skill__header">
        <div className="skill__header__divider"></div>
        <h2>
          <span>03. </span>Skills
        </h2>
        <div className="skill__header__divider"></div>
      </div>
      <div>
        <Line options={options} data={data} />;
      </div>
    </div>
  );
};

export default Skill;
