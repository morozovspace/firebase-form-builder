//  https://apexcharts.com/docs/vue-charts/
//  https://storybook.js.org/docs/react/essentials/controls#annotation
import Chart from "./Chart"
export default {
  title: "Charts/Chart",
  component: Chart,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "line",
          "area",
          "bar",
          "radar",
          "histogram",
          "pie",
          "donut",
          "radialBar",
          "scatter",
          "bubble",
          "heatmap",
          "candlestick",
        ],
      },
      defaultValue: "bar",
    },
    series: {
      control: "object",
      defaultValue: [
        {
          name: "series-1",
          data: [1, 10, 2, 5, 6],
        },
      ],
    },
    width: {
      control: "text",
      defaultValue: "50%",
    },
    height: {
      control: "text",
      defaultValue: "auto",
    },
    options: {
      control: "object",
      defaultValue: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5],
        },
      },
    },
  },
}

export const bar = (arg, { argTypes }) => ({
  components: { Chart },
  props: Object.keys(argTypes),
  template: '<Chart v-bind="$props" />',
})
