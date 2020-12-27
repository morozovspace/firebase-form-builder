<template>
  <div>{{ options }}</div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "bar",
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "series-1",
            data: [1, 10, 2, 5, 6],
          },
        ]
      },
    },
    width: {
      type: String,
      default: "50%",
    },
    height: {
      type: String,
      default: "auto",
    },
    options: {
      type: Object,
      default: () => {
        return {
          chart: {
            id: "vuechart-example",
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5],
          },
        }
      },
    },
  },
  data() {
    return {
      mounted: false,
    }
  },
  mounted() {
    this.mounted = true
  },
}
</script>
