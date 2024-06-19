import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ventas por mes",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "ventas por dia",
      data: [10, 20, 30, 50],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "vemtas por mes",
      data: [10, 20, 30, 50],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function VentasProductos() {
  return <Bar options={options} data={data} />;
}
