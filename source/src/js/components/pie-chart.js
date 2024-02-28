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

export var pieChart = (function () {
  var init = function () {};

  // var data = [
  //   { Pneus: "37%" },
  //   { "Révision / entretien": "12%" },
  //   { Freinage: "22%" },
  //   { Vitrage: "14%" },
  //   { "Pièces techniques": "12%" },
  // ];

  var data = [37, 12, 22, 14, 12];

  var config = {
    type: "doughnut",
    data: {
      labels: [
        "Pneus",
        "Révision / entretien",
        "Freinage",
        "Vitrage",
        "Pièces techniques",
      ],
      datasets: [
        {
          label: "value1",
          data: data,
          backgroundColor: [
            "#001338",
            "#8AB1FF",
            "#C1D6FF",
            "#00339C",
            "#558DFF",
          ],
          cutout: "80%",
        },
        {
          label: "value2",
          data: data,
          backgroundColor: [
            "#001338",
            "#8AB1FF",
            "#C1D6FF",
            "#00339C",
            "#558DFF",
          ],
          cutout: "80%",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Pie Chart",
        },
      },
    },
  };

  var myPieChart = new Chart(document.getElementById("pie-chart"), config);

  return {
    init: init,
  };
})();
