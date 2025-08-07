<script>
    import Highcharts from 'highcharts';

    Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Outfit, sans-serif', // or any Google Font like 'Roboto'
            fontSize: '14px'
        }
    }
    });

    export default {
        name: 'HighchartComponent',
        props: {
            chartOptions: {
                type: Object,
                required: true
            }
        },
        mounted() {
            Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
        }
    };
</script>
<style scoped>
    /* Optional: customize chart container */
</style>
<template>
    <div ref="chartContainer"></div>
</template>