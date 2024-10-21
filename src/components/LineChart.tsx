import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart: React.FC = () => {
  // Data dan konfigurasi untuk ApexCharts
  const [chartData] = useState({
    series: [
      {
        name: "Sales 2024",
        data: [4000, 3000, 2000, 5000, 6000, 7000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false, // Zoom pada grafik
        },
      },
      dataLabels: {
        enabled: false, // Menonaktifkan label data pada titik
      },
      stroke: {
        curve: "smooth", // Garis mulus
      },
      title: {
        text: "Artikel Overview",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // Warna grid
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"], // Label untuk sumbu X
      },
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Interaksi Artikel</h2>
      <Chart
        options={chartData}
        series={[
          { name: "Sales 2024", data: [4000, 3000, 2000, 5000, 6000, 7000] },
        ]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
