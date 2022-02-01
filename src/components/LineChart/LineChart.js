import { Line } from "react-chartjs-2";
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
import { themeEnum, useGlobalState } from "context/Store";
import { colors } from "configs";
import { Wrapper } from "./LineChart.styles";

function LineChart({ data, size, width, height }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );
  const { theme } = useGlobalState();
  const lineColor =
    theme === themeEnum.DARK ? colors.chartDarkTheme : colors.chartLightTheme;
  return (
    <Wrapper size={size}>
      <Line
        data={{
          labels: data,
          datasets: [
            {
              data,
              fill: false,
              borderColor: lineColor,
              borderWidth: 2,
            },
          ],
        }}
        height={height}
        width={width}
        options={{
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            xAxis: {
              display: false,
            },
            yAxis: {
              display: false,
            },
          },
          events: [],
        }}
      />
    </Wrapper>
  );
}

export default LineChart;
