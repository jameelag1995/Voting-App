// BarChart.js
import React, { useEffect } from "react";
// import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
let myChart;
const BarChart = ({ data, candidates }) => {
    // Data format: { labels: [], datasets: [{ data: [] }] }
    // const chartData = {
    //     labels: data.labels,
    //     datasets: [
    //         {
    //             label: "Bar Chart Example",
    //             backgroundColor: "rgba(75,192,192,0.2)",
    //             borderColor: "rgba(75,192,192,1)",
    //             borderWidth: 1,
    //             hoverBackgroundColor: "rgba(75,192,192,0.4)",
    //             hoverBorderColor: "rgba(75,192,192,1)",
    //             data: data.values,
    //         },
    //     ],
    // };

    // const chartOptions = {
    //     scales: {
    //         x: {
    //             type: "category",
    //             beginAtZero: true,
    //         },
    //         y: {
    //             beginAtZero: true,
    //         },
    //     },
    // };
    const ctx = document.getElementById("myChart");
    const chartProps = {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: "# of Votes",
                    data: data.values,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };

    useEffect(() => {
        if (myChart) {
            myChart.destroy();
            myChart = new Chart(ctx, chartProps);
        } else {
            
            myChart = new Chart(ctx, chartProps);
        }
    }, [candidates]);

    return (
        <div>
            <h2>Votes Chart</h2>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    );
};

export default BarChart;
