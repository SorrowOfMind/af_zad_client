import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {randomRGBGenerator, calculatePercentage} from '../utils/fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: []
    }]
  });
  const data = useSelector(state => state.channels);

  useEffect(() => {
    let labels = [];
    let values = [];
    let total = data.reduce((acc, val, idx) => acc += val.num_clients, 0);
    data.forEach((obj) => {
      let percentage = calculatePercentage(total, obj.num_clients);
      labels.push(`${obj.name} - ${percentage}%`);
      values.push(obj.num_clients);
    });

    let bgColors = randomRGBGenerator(labels.length);
    setChartData(prevData => {
      return {
        ...prevData,
        labels,
        datasets: [{
          data: values,
          backgroundColor: bgColors
        }]
      }
    });
  }, [data]);

  return (
    <section className="section-chart__wrapper">
      <Pie data={chartData} options={{plugins: {legend: { display: true, position: "left" }}}}/>
    </section>
  );
}

export default Chart;
