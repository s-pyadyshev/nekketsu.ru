import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export var barChart = (function () {
  var init = function () {};

  var data = [
    { x: "Janvier", consumption1: 1000, consumption2: 1000 },
    { x: "Février", consumption1: 6000, consumption2: 1000 },
    { x: "Mars", consumption1: 3000, consumption2: 1000 },
    { x: "Avril", consumption1: 4000, consumption2: 1000 },
    { x: "Mai", consumption1: 100, consumption2: 1000 },
    { x: "Juin", consumption1: 12000, consumption2: 1000 },
    { x: "Juillet", consumption1: 5000, consumption2: 1000 },
    { x: "Août", consumption1: 2000, consumption2: 1000 },
    { x: "Septembre", consumption1: 7000, consumption2: 1000 },
    { x: "Octobre", consumption1: 8000, consumption2: 1000 },
    { x: "Novembre", consumption1: 9000, consumption2: 1000 },
    { x: "Décembre", consumption1: 10000, consumption2: 1000 },
  ];

  var config = {
    type: "bar",
    data: {
      // labels: [
      //   "Janvier",
      //   "Février",
      //   "Mars",
      //   "Avril",
      //   "Mai",
      //   "Juin",
      //   "Juillet",
      //   "Août",
      //   "Septembre",
      //   "Octobre",
      //   "Novembre",
      //   "Décembre",
      // ],
      datasets: [
        {
          label: "consumption1",
          data: data,
          parsing: {
            yAxisKey: "consumption1",
          },
          backgroundColor: "#001f5e",
        },
        // {
        //   label: "consumption2",
        //   data: data,
        //   parsing: {
        //     yAxisKey: "consumption2",
        //   },
        //   backgroundColor: "#0345cc",
        // },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            borderColor: "transparent",
          },
        },
      },
    },
  };

  var myBarChart = new Chart(document.getElementById("bar-chart"), config);

  return {
    init: init,
  };
})();
