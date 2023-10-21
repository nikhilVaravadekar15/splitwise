"use client"

import React from "react";
import { Chart } from "react-google-charts";

const data = [
    [
        "Day",
        "Expenses"
    ],
    [1, 37.8],
    [2, 30.9],
    [3, 25.4],
    [4, 11.7],
    [5, 11.9],
    [6, 8.8],
    [7, 7.6],
    [8, 12.3],
    [9, 16.9],
    [10, 12.8],
    [11, 5.3],
    [12, 6.6],
    [13, 4.8],
    [14, 4.2],
];

const options = {
    chart: {
        title: "Total Expenses",
        subtitle: "in (INR)",
    },
    colors: ["#0CA678"],
};

export default function LineChart() {
    return (
        <div className="p-4 w-full cursor-pointer border rounded-lg hover:shadow-md">
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}
