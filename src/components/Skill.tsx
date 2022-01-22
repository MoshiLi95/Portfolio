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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#f8f8f2",
      },
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      min: 0,
      max: 100,
      grid: {
        color: "#606061",
      },
      ticks: {
        color: "#f8f8f2",
      },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      min: 0,
      max: 100,
      grid: {
        color: "#f8f8f2",
      },
      ticks: {
        callback: function (val: any, index: any) {
          if (val === 0) {
            return "";
          } else if (val < 60) {
            return "Beginner";
          } else if (val < 90) {
            return "Intermediate";
          } else {
            return "Expert";
          }
        },
        color: "#ff5555",
        count: 4,
        font: {
          size: 14,
          weight: "500",
        },
      },
    },
    x: {
      grid: {
        color: "#f8f8f2",
      },
      ticks: {
        color: "#ff5555",
      },
    },
  },
};

const labels = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];
const data = {
  labels,
  datasets: [
    {
      label: "Snowboarding",
      data: [0, 0, 15, 16, 14, 14, 14, 20],
      borderColor: "rgb(98, 114, 164)",
      backgroundColor: "rgb(98, 114, 164, 0.5)",
    },
    {
      label: "React",
      data: [0, 0, 0, 25, 60, 65, 75, 80],
      borderColor: "rgb(139, 233, 253)",
      backgroundColor: "rgb(139, 233, 253, 0.5)",
    },
    {
      label: "JavaScript",
      data: [0, 10, 20, 34, 60, 65, 65, 66],
      borderColor: "rgb(80, 250, 123)",
      backgroundColor: "rgb(80, 250, 123, 0.5)",
    },
    {
      label: "HTML&CSS",
      data: [0, 20, 30, 60, 67, 67, 67, 72],
      borderColor: "rgb(255, 184, 108)",
      backgroundColor: "rgb(255, 184, 108, 0.5)",
    },
    {
      label: "Python",
      data: [0, 10, 20, 35, 35, 35, 45, 55],
      borderColor: "rgb(255, 121, 198)",
      backgroundColor: "rgb(255, 121, 198, 0.5)",
    },
    {
      label: "Docker",
      data: [0, 0, 0, 0, 0, 20, 30, 40],
      borderColor: "rgb(189, 147, 249)",
      backgroundColor: "rgb(189, 147, 249, 0.5)",
    },
    {
      label: "Redux",
      data: [0, 0, 0, 20, 25, 32, 32, 42],
      borderColor: "rgb(255, 85, 85)",
      backgroundColor: "rgb(255, 85, 85, 0.5)",
    },
    {
      label: "Mobx",
      data: [0, 0, 0, 0, 0, 0, 34, 36],
      borderColor: "rgb(241, 250, 140)",
      backgroundColor: "rgb(241, 250, 140, 0.5)",
    },
    {
      label: "MongoDB",
      data: [0, 0, 0, 10, 15, 15, 20, 25],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192, 0.5)",
    },
  ],
};

const Skill = () => {
  return (
    <div className="skill" id="skill">
      <div className="skill__header">
        <div className="skill__header__divider"></div>
        <h2>
          <span>02. </span>Skills
        </h2>
        <div className="skill__header__divider"></div>
      </div>
      <div className="skill__chart">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Skill;
